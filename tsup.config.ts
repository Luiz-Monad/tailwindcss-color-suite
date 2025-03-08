import type { Options } from 'tsup'
import { commonjs } from "@hyrious/esbuild-plugin-commonjs"
import module from 'node:module'
import { tsup as bin } from './bin/tsup.config'

const base: Options = {
	dts: true,
	splitting: true,
	sourcemap: true,
	minify: false,
	cjsInterop: true,
	format: ['cjs', 'esm'],
	entryPoints: ['src/index.ts', 'src/plugin.svelte.ts'],
	noExternal: [
		'tailwindcss/colors',
	],
	esbuildPlugins: [
		commonjs({
			ignore: (path) => !(module.builtinModules.includes(path) || path.startsWith('node:'))
		}),
	],
	esbuildOptions: (options) => {
		options.chunkNames = 'library'
	},
};

export const tsup: Options[] = [base, {
	...base,
	entryPoints: ['src/plugin.tailwindcss.ts'],
}, {
	...base,
	...bin,
}]