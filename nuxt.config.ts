// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	ssr: false,
	srcDir: 'src',
	modules: [
		'@unocss/nuxt',
		'nuxtjs-naive-ui'
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