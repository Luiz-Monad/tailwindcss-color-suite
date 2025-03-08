import { Plugin } from 'vite'
import { ColorSuiteConfig } from '../types'
import { COLOR_CONFIG_ID, DEFAULT_COLOR_CONFIG, SETTINGS_CONFIG_ID, RESOLVED_COLORS_ID, PREFIXED_COLOR_CONFIG_ID, PREFIXED_SETTINGS_CONFIG_ID, PREFIXED_RESOLVED_COLORS_ID, SETTINGS_UPDATED_EVENT } from '../constants';
import { promises as fs, existsSync } from 'fs'
import { createColorSuiteServer } from '../server'
import { getDefaultsFromTailwind, resolveColorConfig } from '../utils'
import { createConfigStore } from '../config'

export function colorSuiteDevPlugin(options:{ config?:string } = {}):Plugin {
	const DEFAULTS_WITH_COLORS = Object.assign({}, DEFAULT_COLOR_CONFIG, {
		colors: getDefaultsFromTailwind()
	})

	const color_config_store_promise = async () => {
		const color_config_store = await createConfigStore(options.config)
		let color_config:ColorSuiteConfig
		try {
			color_config = await color_config_store.read()
		} catch(e) {
			// There was a problem requiring the color config
			if (existsSync(color_config_store.path)) {
				// The file exists so it has been created, most likely malformatted. We cannot fix this automatically so just throw an error
				throw new Error(`[Color Suite Dev] A color config file exists at '${color_config_store.path}' but it could not be required.`)
			} else try {
				// Color config file doesn't exist so we can try to make a new one
			  color_config_store.store(DEFAULTS_WITH_COLORS)
				await color_config_store.write()
				color_config = DEFAULTS_WITH_COLORS
			} catch(e) {
				console.error(e)
				throw new Error(`[Color Suite Dev] Unable to create the color config file at '${color_config_store.path}'.`)
			}
		}

		if (!color_config || typeof color_config != "object") throw new Error(`[Color Suite Dev] The color config does not export an object.`)
		color_config = Object.assign(DEFAULTS_WITH_COLORS, color_config)
		color_config_store.store(color_config)
		return color_config_store
	}

	return {
		name: 'tailwindcss-color-suite-dev',
		apply: 'serve',
		enforce: 'pre',
		configureServer: server => {
			color_config_store_promise().then(config => {
				server.watcher.add(config.path)
			})
			return createColorSuiteServer(server, color_config_store_promise)
		},
		resolveId(id) {
			// Virtual Import: Config colors object
			if (id == COLOR_CONFIG_ID) return PREFIXED_COLOR_CONFIG_ID

			// Virtual Import: Config settings object
			if (id == SETTINGS_CONFIG_ID) return PREFIXED_SETTINGS_CONFIG_ID

			// Virtual Import: Colors object resolved to CSS values
			if (id == RESOLVED_COLORS_ID) return PREFIXED_RESOLVED_COLORS_ID
		},
		async load(id) {
			const color_config = async () => {
				const config_store = await color_config_store_promise()
				return await config_store.read()
			}

			// Virtual Import: Config colors object
			// Returns the current color config object
			if (id === PREFIXED_COLOR_CONFIG_ID) return `export const colors = ${ JSON.stringify((await color_config()).colors) }`

			// Virtual Import: Config settings object
			// Returns the current settings config object
			if (id === PREFIXED_SETTINGS_CONFIG_ID) return `export const settings = ${ JSON.stringify((await color_config()).settings) }`

			// Virtual Import: Colors object resolved to CSS values
			// Returns the resolved color object
			if (id === PREFIXED_RESOLVED_COLORS_ID) return `export const colors = ${ JSON.stringify(resolveColorConfig((await color_config()))) }`
		},
		async handleHotUpdate({ file, server }) {
			const config_store = await color_config_store_promise()
			if (config_store.match(file)) {
				let color_config:ColorSuiteConfig = await config_store.read(true) // cache bust
				color_config = Object.assign(DEFAULTS_WITH_COLORS, color_config) // make sure we've got all defaults

				let config_module = server.moduleGraph.getModuleById(COLOR_CONFIG_ID)
				if(config_module) server.moduleGraph.invalidateModule(config_module)

				let settings_module = server.moduleGraph.getModuleById(SETTINGS_CONFIG_ID)
				if(settings_module) server.moduleGraph.invalidateModule(settings_module)

				let resolved_colors_module = server.moduleGraph.getModuleById(RESOLVED_COLORS_ID)
				if(resolved_colors_module) server.moduleGraph.invalidateModule(resolved_colors_module)

				server.ws.send({
					type: 'custom',
					event: SETTINGS_UPDATED_EVENT,
					data: color_config
				})

				return []
			}
		}
	}
}