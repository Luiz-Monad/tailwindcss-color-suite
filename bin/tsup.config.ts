import type { Options } from 'tsup'

export const tsup: Options = {
	dts: false,
	splitting: true,
	sourcemap: false,
	minify: false,
	format: ['esm'],
	entryPoints: ['bin/cli.ts'],
	external: [
		'../dist/index.mjs',
	]
}