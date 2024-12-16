import { Module } from 'vuex'
import { ColorSuiteColors } from '../../../types'
import { CreateColorForm, UpdateColorForm } from './forms'
import { hydrateColorConfig, isColorScale, convertPoints } from '../../lib/utils.color-suite'
import { reactiveCloneDeep } from '../../lib/utils'
import { colors as colors_config } from 'virtual:color-suite/config/colors'
import { COLOR_CREATE_PATH, COLOR_DELETE_PATH, COLOR_UPDATE_ALL_PATH, COLOR_UPDATE_PATH } from '../../../constants'

interface UpdatePayload {
	token: string
	form: UpdateColorForm
}
interface DeletePayload {
	token: string
}

export const color_store:Module<ColorSuiteColors, any> = {
	namespaced: true,
	state() {
		return hydrateColorConfig(colors_config as ColorSuiteColors)
	},
	mutations: {
		create(state, form:CreateColorForm) {
			state[form.token] = form.value
		},
		update(state, { token, form }:UpdatePayload) {
			if (form.token != token) delete state[token] // this token is being renamed, delete old one
			state[form.token] = form.value
		},
		updateAll(state, colors:ColorSuiteColors) {
			let remaining_tokens = Object.keys(state)
			for (let [token, color] of Object.entries(colors)) {
				if (isColorScale(color)) {
					convertPoints(color.hue_curve)
					convertPoints(color.saturation_curve)
					convertPoints(color.value_curve)
				}

				let current_token = remaining_tokens.shift()

				if (current_token && token != current_token) { // There is a token in this position but it does not match the one from our new config
					let remaining_index = remaining_tokens.indexOf(token)
					if (remaining_index >= 0) { // The new token does exist already in a different spot
						remaining_tokens.splice(remaining_index, 1) // take the current token out of the remaining tokens list as we are using it again in the current spot
						remaining_tokens.unshift(current_token) // put the mismatched token back in for the next round
					}
				}

				delete state[token]
				state[token] = color
			}

			for (let token of remaining_tokens) delete state[token] // delete any remaining tokens from the state as they are no longer in the config
		},
		delete(state, { token }:DeletePayload) {
			delete state[token]
		}
	},
	actions: {
		async create(context, form:CreateColorForm) {
			let result = await fetch(COLOR_CREATE_PATH, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form)
			})

			if (result.ok) {
				context.commit('create', form)
				return { success: true }
			}
			return { success: false }
		},
		async update(context, { token, form }:UpdatePayload) {
			let result = await fetch(`${COLOR_UPDATE_PATH}?token=${token}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form)
			})

			if (result.ok) {
				context.commit('update', { token, form })
				return { success: true }
			}
			return { success: false }
		},
		async updateAll(context, colors:ColorSuiteColors) {
			const memento = reactiveCloneDeep(context.state)

			context.commit('updateAll', colors) // Eager commit

			let result = await fetch(COLOR_UPDATE_ALL_PATH, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(colors)
			})

			if (result.ok) {
				return { success: true }
			}

			context.commit('updateAll', memento) // Roll back eager commit
			return { success: false }
		},
		async delete(context, { token }:DeletePayload) {
			let result = await fetch(`${COLOR_DELETE_PATH}?token=${token}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				}
			})

			if (result.ok) {
				context.commit('delete', { token })
				return { success: true }
			}
			return { success: false }
		}
	}
}