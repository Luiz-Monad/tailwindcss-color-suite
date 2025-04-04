import { Connect, ViteDevServer } from 'vite'
import { ColorSuiteConfig } from '../types'
import { ServerResponse } from 'http'
import body_parser from 'body-parser'
import { join } from 'path'
import { URL } from 'url'
import { promises as fs } from 'fs'
import { COLOR_CREATE_PATH, SETTINGS_UPDATE_PATH, COLOR_CONFIG_ID, SETTINGS_CONFIG_ID, COLOR_UPDATE_PATH, COLOR_DELETE_PATH, COLOR_UPDATE_ALL_PATH } from '../constants'
import { CreateColorForm } from '../editor/services/color'
import { UpdateSettingsForm } from '../editor/services/settings'
import { UpdateColorForm } from '../editor/services/color/forms';
import { ConfigStore } from '../config'

const bodyParser = body_parser.json()
const parseBody = <T = { [key: string]: any }>(req: Connect.IncomingMessage, res: ServerResponse): Promise<T> => new Promise((resolve, reject) => {
	try {
		bodyParser(req, res, resolve)
	} catch (e) {
		reject(e)
	}
}).then((e) => {
	if (e) throw e
	return (req as any).body
})

export function createColorSuiteServer(server: ViteDevServer, color_config_store: (() => Promise<ConfigStore<ColorSuiteConfig>>)) {
	const color_config_promise = async () => await (await color_config_store()).read()
	const save_color_config_promise = async () => await (await color_config_store()).write()

	async function saveConfig(reload: boolean = false) {
		await save_color_config_promise()

		let config_module = server.moduleGraph.getModuleById(COLOR_CONFIG_ID)
		if (config_module) server.moduleGraph.invalidateModule(config_module)

		let settings_module = server.moduleGraph.getModuleById(SETTINGS_CONFIG_ID)
		if (settings_module) server.moduleGraph.invalidateModule(settings_module)

		if (reload) {
			const time = new Date()
			let ext = ''
			for (const x of ['.ts', '.mts', '.js', '.mjs']) {
				try {
					if ((await fs.stat('./tailwind.config' + x)).isFile()) {
						ext = x
						break
					}
				} catch { }
			}
			await fs.utimes(join(process.cwd(), './tailwind.config' + ext), time, time)
		}
	}

	//
	// Colors Endpoints

	// Create color
	server.middlewares.use(COLOR_CREATE_PATH, async (req, res, next) => {
		const color_config = await color_config_promise()
		try {
			const body = await parseBody<CreateColorForm>(req, res)
			if (!body || Object.keys(body).length == 0) throw new Error('No data provided.')

			const { token, value } = body
			if (!token) throw new Error('Color token not defined.')
			if (color_config.colors[token]) throw new Error('Color token already exists.')

			color_config.colors[token] = value
			await saveConfig(false)

			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify({ success: true }))
		} catch (e) {
			next(e)
		}
	})

	// Update color
	server.middlewares.use(COLOR_UPDATE_PATH, async (req, res, next) => {
		const color_config = await color_config_promise()
		try {
			const body = await parseBody<UpdateColorForm>(req, res)
			if (!body || Object.keys(body).length == 0) throw new Error('No data provided.')

			let url: URL, token: string | null
			try {
				url = new URL(`http://dummy.local${req.originalUrl!}`)
				token = url.searchParams.get('token')
				if (!token || !color_config.colors[token]) throw new Error() // Can have no message because it will get eaten
			} catch (e) {
				throw new Error('Color token does not exist.')
			}

			const { token: new_token, value } = body
			if (!new_token) throw new Error('Color token not defined.')
			if (new_token != token) delete color_config.colors[token] // this token is being renamed, delete old one
			color_config.colors[new_token] = value // save the t
			await saveConfig(false)

			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify({ success: true }))
		} catch (e) {
			next(e)
		}
	})

	// Update all colors
	server.middlewares.use(COLOR_UPDATE_ALL_PATH, async (req, res, next) => {
		const color_config = await color_config_promise()
		try {
			const body = await parseBody<UpdateColorForm>(req, res)
			if (!body || Object.keys(body).length == 0) throw new Error('No data provided.')

			const colors = body

			let remaining_tokens = Object.keys(color_config.colors)
			for (let [token, color] of Object.entries(colors)) {
				let current_token = remaining_tokens.shift()

				if (current_token && token != current_token) { // There is a token in this position but it does not match the one from our new config
					let remaining_index = remaining_tokens.indexOf(token)
					if (remaining_index >= 0) { // The new token does exist already in a different spot
						remaining_tokens.splice(remaining_index, 1) // take the current token out of the remaining tokens list as we are using it again in the current spot
						remaining_tokens.unshift(current_token) // put the mismatched token back in for the next round
					}
				}

				delete color_config.colors[token]
				color_config.colors[token] = color
			}

			for (let token of remaining_tokens) delete color_config.colors[token] // delete any remaining tokens from the state as they are no longer in the config

			await saveConfig()

			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify({ success: true }))
		} catch (e) {
			next(e)
		}
	})

	// Delete color
	server.middlewares.use(COLOR_DELETE_PATH, async (req, res, next) => {
		const color_config = await color_config_promise()
		try {
			let url: URL, token: string | null
			try {
				url = new URL(`http://dummy.local${req.originalUrl!}`)
				token = url.searchParams.get('token')
				if (!token || !color_config.colors[token]) throw new Error()
			} catch (e) {
				throw new Error('Color token does not exist.')
			}

			delete color_config.colors[token]
			await saveConfig(false)

			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify({ success: true }))
		} catch (e) {
			next(e)
		}
	})

	// ---
	//

	//
	// Settings Endpoints

	// Update Settings
	server.middlewares.use(SETTINGS_UPDATE_PATH, async (req, res, next) => {
		const color_config = await color_config_promise()
		try {
			const body = await parseBody<UpdateSettingsForm>(req, res)
			if (!body || Object.keys(body).length == 0) throw new Error('No data provided.')

			Object.assign(color_config.settings, body)
			await saveConfig()

			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify({ success: true }))
		} catch (e) {
			next(e)
		}
	})

	// ---
	//
}