"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }



var _libraryjs = require('./library.js');

// src/plugin.svelte.ts
var _vite = require('vite');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
function resolve_entry(entry) {
  if (_fs2.default.existsSync(entry)) {
    const stats = _fs2.default.statSync(entry);
    const index = _path2.default.join(entry, "index");
    if (stats.isDirectory() && _fs2.default.existsSync(index)) {
      return resolve_entry(index);
    }
    return entry;
  } else {
    const dir = _path2.default.dirname(entry);
    if (_fs2.default.existsSync(dir)) {
      const base = _path2.default.basename(entry);
      const files = _fs2.default.readdirSync(dir);
      const found = files.find((file) => file.replace(/\.(js|ts)$/, "") === base);
      if (found) return _path2.default.join(dir, found);
    }
  }
  return null;
}
function colorSuiteSvelteConfig(svelteKitConfig) {
  const outDir = _nullishCoalesce(_optionalChain([svelteKitConfig, 'optionalAccess', _ => _.kit, 'optionalAccess', _2 => _2.outDir]), () => ( ".svelte-kit"));
  const currentHook = `${outDir}/generated/colorsuite-hook.server.mjs`;
  const previousHook = _nullishCoalesce(_optionalChain([svelteKitConfig, 'optionalAccess', _3 => _3.kit, 'optionalAccess', _4 => _4.files, 'optionalAccess', _5 => _5.hooks, 'optionalAccess', _6 => _6.server]), () => ( "src/hooks.server"));
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
  return _vite.mergeConfig.call(void 0, _nullishCoalesce(svelteKitConfig, () => ( {})), overrides);
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
      currentHook = _path2.default.resolve(hookConfig.currentHook);
      previousHook = resolve_entry(hookConfig.previousHook);
      if (previousHook && _fs2.default.existsSync(previousHook)) {
        const currentDir = _path2.default.dirname(currentHook);
        previousHook = _path2.default.relative(currentDir, previousHook).replace(/\\/g, "/");
      } else {
        previousHook = null;
      }
      if (is_build) {
        const combinedHooksContent = `
					// this file is auto-generated
					export * from ${JSON.stringify(previousHook)};
				`;
        _fs2.default.mkdirSync(_path2.default.dirname(currentHook), { recursive: true });
        _fs2.default.writeFileSync(currentHook, combinedHooksContent);
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
      _fs2.default.mkdirSync(_path2.default.dirname(currentHook), { recursive: true });
      _fs2.default.writeFileSync(currentHook, combinedHooksContent);
    }
  };
}
async function colorSuiteHandler({ event, resolve }) {
  return await resolve(event, {
    transformPageChunk: async ({ html }) => {
      const head = `<script type="module" src="${_libraryjs.COLOR_SUITE_PATH}"></script>`;
      const body = `<div id="${_libraryjs.EDITOR_APP_MOUNT_ID}"></div>`;
      return html.replace("</head>", head + "</head>").replace(/<body(.*?)>/, (match, attributes) => "<body" + attributes + ">" + body);
    }
  });
}
function colorSuitePlugin2(options = {}) {
  return [_libraryjs.colorSuitePlugin.call(void 0, options), hookServerHookPlugin()];
}




exports.colorSuiteHandler = colorSuiteHandler; exports.colorSuitePlugin = colorSuitePlugin2; exports.colorSuiteSvelteConfig = colorSuiteSvelteConfig;
//# sourceMappingURL=plugin.svelte.js.map