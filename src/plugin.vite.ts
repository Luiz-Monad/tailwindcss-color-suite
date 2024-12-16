import { Plugin } from 'vite'
import { ColorSuiteConfig } from './types'
import { COLOR_SUITE_PATH, COLOR_CONFIG_ID, DEFAULT_COLOR_CONFIG, EDITOR_APP_MOUNT_ID, SETTINGS_CONFIG_ID, COLOR_SUITE_ID, RESOLVED_COLORS_ID, PREFIXED_COLOR_CONFIG_ID, PREFIXED_SETTINGS_CONFIG_ID, PREFIXED_RESOLVED_COLORS_ID } from './constants';
import { promises as fs, existsSync } from 'fs'
import { inspect } from 'util'
import { createColorSuiteServer } from './server/index'
import { getDefaultsFromTailwind, resolveColorConfig } from './utils'
import { createConfigStore } from './config'

export function colorSuitePlugin(options:{ config?:string } = {}):Plugin {
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
        throw new Error(`[Color Suite] A color config file exists at '${color_config_store.path}' but it could not be required.`)
      } else try {
        // Color config file doesn't exist so we can try to make a new one
        await color_config_store.write(DEFAULTS_WITH_COLORS)
        color_config = DEFAULTS_WITH_COLORS
      } catch(e) {
        console.error(e)
        throw new Error(`[Color Suite] Unable to create the color config file at '${color_config_store.path}'.`)
      }
    }

    if (!color_config || typeof color_config != "object") throw new Error(`[Color Suite] The color config does not export an object.`)
    color_config = Object.assign(DEFAULTS_WITH_COLORS, color_config)
    color_config_store.store(color_config)
    return color_config_store
  }

	const color_config_promise = async () => await (await color_config_store_promise()).read()

	return {
		name: 'tailwindcss-color-suite',
    apply: 'serve',
    enforce: 'pre',
    configureServer: server => {
      color_config_store_promise().then(config => {
        server.watcher.add(config.path)
      })
      return createColorSuiteServer(server, color_config_store_promise)
    },
    config(config) {
      const exclude = [COLOR_CONFIG_ID, SETTINGS_CONFIG_ID]
      if (!config.optimizeDeps) config.optimizeDeps = { exclude }
      else {
        if (!config.optimizeDeps.exclude) config.optimizeDeps.exclude = exclude
        else {
          config.optimizeDeps.exclude = [...config.optimizeDeps.exclude, ...exclude]
        }
      }

      return config
    },
		resolveId(id) {
      // Virtual File: /@tailwindcss-color-suite
      if (id == COLOR_SUITE_PATH) return COLOR_SUITE_PATH

      // Virtual Import: Config colors object
      if (id == COLOR_CONFIG_ID) return PREFIXED_COLOR_CONFIG_ID

      // Virtual Import: Config settings object
      if (id == SETTINGS_CONFIG_ID) return PREFIXED_SETTINGS_CONFIG_ID

      // Virtual Import: Colors object resolved to CSS values
      if (id == RESOLVED_COLORS_ID) return PREFIXED_RESOLVED_COLORS_ID
    },
    async load(id) {
      let color_config:ColorSuiteConfig = await color_config_promise()
      
      // Virtual File: /@tailwindcss-color-suite
      // Main entry point to scaffold the editor application.
      if (id === COLOR_SUITE_PATH) return `import "tailwindcss-color-suite/app";`

      // Virtual Import: Config colors object
      // Returns the current color config object
      if (id === PREFIXED_COLOR_CONFIG_ID) return `export const colors = ${ JSON.stringify(color_config.colors) }`

      // Virtual Import: Config settings object
      // Returns the current settings config object
      if (id === PREFIXED_SETTINGS_CONFIG_ID) return `export const settings = ${ JSON.stringify(color_config.settings) }`

      // Virtual Import: Colors object resolved to CSS values
      // Returns the resolved color object
      if (id === PREFIXED_RESOLVED_COLORS_ID) return `export const colors = ${ JSON.stringify(resolveColorConfig(color_config)) }`
    },
    async handleHotUpdate({ file, server }) {
      if (file.match(/colors\.config\.js/g)) {
        // bundleRequire already does cachebusting
        let color_config:ColorSuiteConfig = await color_config_promise()
        color_config = Object.assign(DEFAULTS_WITH_COLORS, color_config) // make sure we've got all defaults

        let config_module = server.moduleGraph.getModuleById(COLOR_CONFIG_ID)
        if(config_module) server.moduleGraph.invalidateModule(config_module)

        let settings_module = server.moduleGraph.getModuleById(SETTINGS_CONFIG_ID)
        if(settings_module) server.moduleGraph.invalidateModule(settings_module)

        let resolved_colors_module = server.moduleGraph.getModuleById(RESOLVED_COLORS_ID)
        if(resolved_colors_module) server.moduleGraph.invalidateModule(resolved_colors_module)

        server.ws.send({
          type: 'custom',
          event: `${ COLOR_SUITE_ID }:config-updated`,
          data: color_config
        })

        return []
      }
    },
    transformIndexHtml(html) {
      return {
        html,
        tags: [

          // Add script to `head` that loads the editor application entry point
          {
            injectTo: 'head',
            tag: 'script',
            attrs: {
              type: 'module',
              src: COLOR_SUITE_PATH
            }
          },

          // Add root `div` to the `body` so the editor application can be embedded
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: { id: EDITOR_APP_MOUNT_ID }
          }
        ]
      }
    }
	}
}