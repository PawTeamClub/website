// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	ssr: false,
	srcDir: 'src',
	app: {
		baseURL: '.',
		head: {
			title: 'Paw Team'
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	},
	router: {
		options: {
			hashMode: true
		}
	},
	devtools: {
		enabled: true
	},
	modules: [
		'@unocss/nuxt',
		'nuxtjs-naive-ui',
		'@nuxtjs/i18n'
	],
	i18n: {
		detectBrowserLanguage: {
			useCookie: false
		},
		locales: ['en', 'zh'],
		defaultLocale: 'en'
	},
	vite: {
		plugins: [
			AutoImport({
				imports: [
					{
						'naive-ui': [
							'useDialog',
							'useMessage',
							'useModal',
							'useNotification',
							'useLoadingBar'
						]
					}
				]
			}),
			Components({
				resolvers: [
					NaiveUiResolver()
				]
			})
		]
	}
})