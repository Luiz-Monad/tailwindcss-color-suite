import type { Options } from 'tsup'
import { commonjs } from "@hyrious/esbuild-plugin-commonjs"
import module from 'node:module'

export const tsup: Options = {
	dts: false,
	splitting: true,
	sourcemap: false,
	minify: false,
	format: ['esm'],
	entryPoints: ['bin/cli.ts'],
	external: [
		'../dist/index.mjs',
	],
	esbuildPlugins: [
		commonjs({
			ignore: (path) => !(module.builtinModules.includes(path) || path.startsWith('node:'))
		}),
	],
}