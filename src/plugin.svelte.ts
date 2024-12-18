import type { Plugin } from 'vite'
import { mergeConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { colorSuitePlugin } from './plugin.vite'
import { COLOR_SUITE_PATH, COLOR_CONFIG_ID, DEFAULT_COLOR_CONFIG, EDITOR_APP_MOUNT_ID, SETTINGS_CONFIG_ID, COLOR_SUITE_ID, RESOLVED_COLORS_ID, PREFIXED_COLOR_CONFIG_ID, PREFIXED_SETTINGS_CONFIG_ID, PREFIXED_RESOLVED_COLORS_ID, SETTINGS_UPDATED_EVENT } from './constants';

// taken from /@sveltejs/kit/src/utils/filesystem.js
function resolve_entry(entry: string) {
	if (fs.existsSync(entry)) {
		const stats = fs.statSync(entry);
		const index = path.join(entry, 'index');
		if (stats.isDirectory() && fs.existsSync(index)) {
			return resolve_entry(index);
		}
		return entry;
	} else {
		const dir = path.dirname(entry);
		if (fs.existsSync(dir)) {
			const base = path.basename(entry);
			const files = fs.readdirSync(dir);
			const found = files.find((file) => file.replace(/\.(js|ts)$/, '') === base);
			if (found) return path.join(dir, found);
		}
	}
	return null;
}

/**
 * @param {import('@sveltejs/kit').Config} [svelteKitConfig]
 * @returns {import('@sveltejs/kit').Config}
 */
export function colorSuiteSvelteKitConfig(svelteKitConfig: any) {
	const outDir = svelteKitConfig?.kit?.outDir ?? '.svelte-kit'
	const currentHook = `${outDir}/generated/hooks.server.mjs`
	const previousHook = svelteKitConfig?.kit?.files?.hooks?.server ?? 'src/hooks.server'

	globalThis.__hook_hooks = {
		currentHook,
		previousHook,
	}

	/** @type {import('@sveltejs/kit').Config} */
	const overrides = {
		kit: {
			files: {
				hooks: {
					server: currentHook
				}
			}
		},
	}

	return mergeConfig(svelteKitConfig, overrides);
}

function hookTransformIndexHtmlPlugin(): Plugin {
	let is_build: boolean
	let currentHook: string
	let previousHook: string | null
	return {
		name: 'hook-sveltekit-transformIndexHtml',
		enforce: 'pre',

		config(config, config_env) {
			const hookConfig = (globalThis as any).__hook_hooks
			if (!hookConfig) {
				throw new Error(`[Color Suite] Hook weren't hooked. Did you forget to add colorSuiteSvelteKitConfig to svelte.config.js ?`)
			}

			is_build = config_env.command === 'build'
			currentHook = path.resolve(hookConfig.currentHook)
			previousHook = resolve_entry(hookConfig.previousHook)
			if (previousHook && fs.existsSync(previousHook)) {
				const currentDir = path.dirname(currentHook)
				previousHook = path.relative(currentDir, previousHook).replace(/\\/g, '/')
			} else {
				previousHook = null
			}

			if (is_build) {
				const combinedHooksContent = `
					// this file is auto-generated
					export * from ${JSON.stringify(previousHook)};
				`
				fs.mkdirSync(path.dirname(currentHook), { recursive: true });
				fs.writeFileSync(currentHook, combinedHooksContent);
			}
		},

		configureServer(server) {

			const handler =
				`async ({ event, resolve }) => await resolve(event, {
					transformPageChunk: async ({ html }) => {
						const head = '<script type="module" src="${COLOR_SUITE_PATH}"></script>'
						const body = '<div id="${EDITOR_APP_MOUNT_ID}"></div>'
						return html
							.replace('</head>', head + '</head>')
							.replace(/<body(.*?)>/, (match, attributes) => '<body' + attributes + '>' + body);
					},
				});
				`

			let combinedHooksContent
			if (previousHook) {
				combinedHooksContent = `
					import { sequence } from '@sveltejs/kit/hooks';
					import * as userHooks from ${JSON.stringify(previousHook)};
					const customHandle = ${handler}
					export const handle = sequence(customHandle, userHooks.handle);
					export default { ...userHooks, handle };
				`
			} else {
				combinedHooksContent = `
					export const handle = ${handler}
				`;
			}
			combinedHooksContent = `
				// this file is auto-generated
				${combinedHooksContent}
			`

			fs.mkdirSync(path.dirname(currentHook), { recursive: true })
			fs.writeFileSync(currentHook, combinedHooksContent)
		},

	};
}

export function colorSuiteSveltePlugin(options: Parameters<typeof colorSuitePlugin>[0] = {}): Plugin[] {
	return [colorSuitePlugin(options), hookTransformIndexHtmlPlugin()];
}