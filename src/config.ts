import { ColorSuiteConfig, TailwindColors } from './types'
import { bundleRequire, JS_EXT_RE } from 'bundle-require'
import { promises as fs } from 'fs'
import { basename, dirname, extname, resolve } from 'path'
import { inspect } from 'util'
import { dehydrateColorConfig } from './editor/lib/utils.color-suite'

export interface ConfigStore<T> {
	path: string
	read(nocache?: boolean): Promise<T>
	write(): Promise<void>
	store(config: T): Promise<void>
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

class ConfigStoreFactory {
	private static instance: Map<string, ConfigStoreBase> | null = null

	private constructor() { }

	public static async getInstance<T>(create: () => ConfigStoreBase<T>, configPath: string): Promise<ConfigStoreBase<T>> {
		if (!ConfigStoreFactory.instance) {
			ConfigStoreFactory.instance = new Map()
		}
		if (!ConfigStoreFactory.instance.has(configPath)) {
			const instance = create()
			await instance.set_path(configPath)
			ConfigStoreFactory.instance.set(configPath, instance)
		}
		return ConfigStoreFactory.instance.get(configPath)!
	}

}

class ConfigStoreBase<T = any> {

	protected constructor() { }

	protected config_cache: T | null = null

	public path: string

	public async set_path(configPath: string): Promise<void> {
		this.path = await guessFileName(process.cwd(), configPath)
		if (!this.path) throw new Error('Cannot determine config path')
		this.path = resolve(this.path)
	}

	public async read(nocache?: boolean): Promise<T> {
		if (!this.config_cache || nocache) {
			this.config_cache = await dynamicRequire(this.path)
		}
		if (!this.config_cache) throw new Error('Cannot load config')
		return this.config_cache
	}

	public async write(): Promise<void> {
		const ext = extname(this.path)
		const code = inspect(this.config_cache, false, Infinity)
		await fs.writeFile(this.path,
			ext === '.ts' || ext === '.mts' ?
				this.template(code) :
				ext === '.mjs' ?
					`export default ${code}`
					: `module.exports = ${code}`
		)
	}

	public async store(config: T): Promise<void> {
		this.config_cache = config
	}

	public match(path: string): boolean {
		return matchFileName(this.path, resolve(path))
	}

	protected template(code: string) {
		return code;
	}
}

class ColorSuiteConfigStoreClass extends ConfigStoreBase<ColorSuiteConfig> {

	public static async getInstance(configPath: string): Promise<ConfigStore<ColorSuiteConfig>> {
		return await ConfigStoreFactory.getInstance(() => new ColorSuiteConfigStoreClass(), configPath)
	}

	protected template(code: string) {
		return `import type { ColorSuiteConfig } from 'tailwindcss-color-suite';\n\nexport default \n${code} satisfies ColorSuiteConfig;`
	}

	public async write(): Promise<void> {
		if (this.config_cache?.colors) {
			dehydrateColorConfig(this.config_cache?.colors)
		}
		await super.write();
	}
}

export async function createConfigStore(userDefinedPath = 'colors.config'): Promise<ConfigStore<ColorSuiteConfig>> {
	return await ColorSuiteConfigStoreClass.getInstance(userDefinedPath)
}

class TailwindColorsStoreClass extends ConfigStoreBase<TailwindColors> {

	public static async getInstance(configPath: string): Promise<ConfigStore<TailwindColors>> {
		return await ConfigStoreFactory.getInstance(() => new TailwindColorsStoreClass(), configPath)
	}

	protected template(code: string) {
		return `import { ThemeConfig } from 'tailwindcss/types/config';\n\nexport default \n${code} satisfies ThemeConfig['colors'];`
	}
}

export async function createColorStore(userDefinedPath = 'tailwindcss.colors.config'): Promise<ConfigStore<TailwindColors>> {
	return await TailwindColorsStoreClass.getInstance(userDefinedPath)
}
