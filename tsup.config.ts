import type { Options } from 'tsup'
import { commonjs } from "@hyrious/esbuild-plugin-commonjs"
import module from 'node:module'

export const tsup: Options = {
  dts: true,
  splitting: true,
  sourcemap: true,
  minify: false,
  format: ['cjs', 'esm'],
  entryPoints: ['src/index.ts'],
  noExternal: [
    'tailwindcss/colors',
  ],
  esbuildPlugins: [
    commonjs({
      ignore: (path) => !(module.builtinModules.includes(path) || path.startsWith('node:'))
    }),
  ],
}
