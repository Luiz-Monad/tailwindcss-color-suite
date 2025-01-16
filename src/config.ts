import { ColorSuiteConfig } from './types'
import { bundleRequire, JS_EXT_RE } from 'bundle-require'
import { promises as fs } from 'fs'
import { basename, dirname, extname, resolve } from 'path'
import { inspect } from 'util'
import { dehydrateColorConfig } from './editor/lib/utils.color-suite'

export interface ColorConfigStore {
	path: string
	read(nocache?: boolean): Promise<ColorSuiteConfig>
	write(): Promise<void>
	store(config: ColorSuiteConfig): Promise<void>
	match(path: string): boolean
}

export { ColorSuiteConfig };

function isESM() {
	try {
		if (typeof __filename !== 'undefined') {
			return __filename.endsWith('.mjs') ? 'esm' : 'cjs';
		}
	} catch {
		return false
	}
}

async function dynamicRequire(path: string) {
	let mod: any
	try {
		mod = (await bundleRequire({
			filepath: path
		})).mod
	} catch (e) {
		// try again as cjs, happens when bundleRequire guesses wrong (loading .js in a type:'module')
		mod = (await bundleRequire({
			filepath: path,
			format: 'cjs',
		})).mod
	}
	return mod.default ? mod.default : mod
}

async function guessFileName(path: string, prefix: string, patterns: RegExp = JS_EXT_RE): Promise<string> {
	try {
		// Find the first file that matches the prefix and extension patterns
		const files = await fs.readdir(path)
		const found = files.find(file => {
			return file.startsWith(prefix) && patterns.test(file)
		})
		if (found) return found
	} catch {
	}
	const defaultExt = isESM() ? 'mjs' : 'js'
	return `${prefix}.${defaultExt}`
}

function matchFileName(path: string, modPath: string, patterns: RegExp = JS_EXT_RE) {
	return path === modPath ||
		dirname(path) === dirname(modPath) &&
		basename(path) === basename(modPath) &&
		patterns.test(modPath)
}

class ColorConfigStoreClass {
	private static instance: Map<string, ColorConfigStore> | null = null

	private config_cache: ColorSuiteConfig | null = null

	public path: string

	private constructor() { }

	public static async getInstance(userDefinedPath?: string): Promise<ColorConfigStore> {
		const key = userDefinedPath ?? '<default>'
		if (!ColorConfigStoreClass.instance) {
			ColorConfigStoreClass.instance = new Map()
		}
		if (!ColorConfigStoreClass.instance.has(key)) {
			const instance = new ColorConfigStoreClass()
			await instance.set_path(userDefinedPath)
			ColorConfigStoreClass.instance.set(key, instance)
		}
		return ColorConfigStoreClass.instance.get(key)!
	}

	private async set_path(userDefinedPath?: string): Promise<void> {
		this.path = !userDefinedPath
			? await guessFileName(process.cwd(), 'colors.config')
			: await guessFileName(process.cwd(), userDefinedPath)
		if (!this.path) throw new Error('Cannot determine config path')
		this.path = resolve(this.path)
	}

	public async read(nocache?: boolean): Promise<ColorSuiteConfig> {
		if (!this.config_cache || nocache) {
			this.config_cache = await dynamicRequire(this.path)
		}
		if (!this.config_cache) throw new Error('Cannot load config')
		return this.config_cache
	}

	public async write(): Promise<void> {
		const ext = extname(this.path)
		if (this.config_cache?.colors) {
			dehydrateColorConfig(this.config_cache?.colors)
		}
		const code = inspect(this.config_cache, false, Infinity)
		await fs.writeFile(this.path,
			ext === '.ts' || ext === '.mts' ?
				`import type { ColorSuiteConfig } from 'tailwindcss-color-suite';\n\nexport default \n${code} satisfies ColorSuiteConfig;` :
				ext === '.mjs' ?
					`export default ${code}`
					: `module.exports = ${code}`
		)
	}

	public async store(config: ColorSuiteConfig): Promise<void> {
		this.config_cache = config
	}

	public match(path: string): boolean {
		return matchFileName(this.path, resolve(path))
	}
}

export async function createConfigStore(userDefinedPath?: string): Promise<ColorConfigStore> {
	return await ColorConfigStoreClass.getInstance(userDefinedPath)
}