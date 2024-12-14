import {
  COLOR_SUITE_PATH,
  EDITOR_APP_MOUNT_ID,
  colorSuitePlugin
} from "./library.mjs";

// src/plugin.svelte.ts
import { mergeConfig } from "vite";
import fs from "fs";
import path from "path";
function resolve_entry(entry) {
  if (fs.existsSync(entry)) {
    const stats = fs.statSync(entry);
    const index = path.join(entry, "index");
    if (stats.isDirectory() && fs.existsSync(index)) {
      return resolve_entry(index);
    }
    return entry;
  } else {
    const dir = path.dirname(entry);
    if (fs.existsSync(dir)) {
      const base = path.basename(entry);
      const files = fs.readdirSync(dir);
      const found = files.find((file) => file.replace(/\.(js|ts)$/, "") === base);
      if (found) return path.join(dir, found);
    }
  }
  return null;
}
function colorSuiteSvelteConfig(svelteKitConfig) {
  const outDir = svelteKitConfig?.kit?.outDir ?? ".svelte-kit";
  const currentHook = `${outDir}/generated/colorsuite-hook.server.mjs`;
  const previousHook = svelteKitConfig?.kit?.files?.hooks?.server ?? "src/hooks.server";
  globalThis.__colorSuiteHook = {
    currentHook,
    previousHook
  };
  const overrides = {
    kit: {
      files: {
        hooks: {
          server: currentHook
        }
      }
    }
  };
  return mergeConfig(svelteKitConfig ?? {}, overrides);
}
function hookServerHookPlugin() {
  let is_build;
  let currentHook;
  let previousHook;
  return {
    name: "hook-sveltekit-colorsuite",
    enforce: "pre",
    config(config, config_env) {
      const hookConfig = globalThis.__colorSuiteHook;
      if (!hookConfig) {
        throw new Error(`[Color Suite] Hook weren't hooked. Did you forget to add colorSuiteSvelteConfig to svelte.config.js ?`);
      }
      is_build = config_env.command === "build";
      currentHook = path.resolve(hookConfig.currentHook);
      previousHook = resolve_entry(hookConfig.previousHook);
      if (previousHook && fs.existsSync(previousHook)) {
        const currentDir = path.dirname(currentHook);
        previousHook = path.relative(currentDir, previousHook).replace(/\\/g, "/");
      } else {
        previousHook = null;
      }
      if (is_build) {
        const combinedHooksContent = `
					// this file is auto-generated
					export * from ${JSON.stringify(previousHook)};
				`;
        fs.mkdirSync(path.dirname(currentHook), { recursive: true });
        fs.writeFileSync(currentHook, combinedHooksContent);
      }
    },
    configureServer(server) {
      let combinedHooksContent;
      if (previousHook) {
        combinedHooksContent = `
					import { sequence } from '@sveltejs/kit/hooks';
					import * as userHooks from ${JSON.stringify(previousHook)};
					import { colorSuiteHandler } from 'tailwindcss-color-suite/svelte';
					export const handle = sequence(colorSuiteHandler, userHooks.handle);
					export default { ...userHooks, handle };
				`;
      } else {
        combinedHooksContent = `
					export * from 'tailwindcss-color-suite/svelte';
				`;
      }
      combinedHooksContent = `
				// this file is auto-generated
				${combinedHooksContent}
			`;
      fs.mkdirSync(path.dirname(currentHook), { recursive: true });
      fs.writeFileSync(currentHook, combinedHooksContent);
    }
  };
}
async function colorSuiteHandler({ event, resolve }) {
  return await resolve(event, {
    transformPageChunk: async ({ html }) => {
      const head = `<script type="module" src="${COLOR_SUITE_PATH}"></script>`;
      const body = `<div id="${EDITOR_APP_MOUNT_ID}"></div>`;
      return html.replace("</head>", head + "</head>").replace(/<body(.*?)>/, (match, attributes) => "<body" + attributes + ">" + body);
    }
  });
}
function colorSuitePlugin2(options = {}) {
  return [colorSuitePlugin(options), hookServerHookPlugin()];
}
export {
  colorSuiteHandler,
  colorSuitePlugin2 as colorSuitePlugin,
  colorSuiteSvelteConfig
};
//# sourceMappingURL=plugin.svelte.mjs.map