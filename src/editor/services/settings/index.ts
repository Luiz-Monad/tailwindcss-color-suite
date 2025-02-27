import { inject, reactive } from 'vue'
import { SettingsService } from './types'
import { ColorSuiteSettings } from '../../../types'
import { Store } from 'vuex'
import { settings_store } from './store'
import { SETTINGS_UPDATED_EVENT } from '../../../constants';

const settings_service_key = Symbol('__SETTINGS_SERVICE__')

export function useSettingsService() {
	const settings_service = inject<SettingsService>(settings_service_key)
	if (!settings_service) throw new Error('Unable to inject Settings Service.')
	return settings_service
}

export function createSettingsService(store:Store<any>) {
	const settings = new Proxy<ColorSuiteSettings>(reactive({}) as ColorSuiteSettings, {
		get(target, prop) {
			return store.state.settings[prop]
		},
		set(target, prop, value) {
			store.dispatch('settings/update', { [prop]: value })
			return true
		}
	})

	if (import.meta.hot) {
		import.meta.hot.on(SETTINGS_UPDATED_EVENT as any, (config:any) => {
			store.commit('settings/update', config.settings)
		})
	}

	const settings_service:SettingsService = {
		settings,
		install(app) {
			store.registerModule('settings', settings_store)
			app.provide(settings_service_key, settings_service)
		}
	}
	return settings_service
}

export * from './forms'