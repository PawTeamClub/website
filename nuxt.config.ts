// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	ssr: false,
	srcDir: 'src',
	app: {
		head: {
			title: 'Paw Team'
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in'
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