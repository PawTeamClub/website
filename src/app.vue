<script lang="ts" setup>
import avatar from 'assets/avatar.webp'
import { darkTheme, dateZhCN, lightTheme, useOsTheme, zhCN } from 'naive-ui'

const osTheme = useOsTheme()
const theme = computed(() => {
	switch (osTheme.value) {
		case 'light':
			return lightTheme
		case 'dark':
			return darkTheme
		default:
			return null
	}
})

useHead({
	link: [
		{
			rel: 'icon',
			href: avatar
		}
	]
})
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator/>

		<n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="theme">
			<n-dialog-provider>
				<n-loading-bar-provider>
					<n-message-provider>
						<n-modal-provider>
							<n-notification-provider>
								<n-layout :native-scrollbar="false" position="absolute">
									<n-layout-content class="container mx-auto">
										<NuxtPage class="px-2 py-10 mb-5"/>
									</n-layout-content>

									<n-layout-footer class="p-2" position="absolute">
										<div class="text-center">
											<n-text>&copy; 2024 - {{ new Date().getFullYear() }}</n-text>
										</div>
									</n-layout-footer>
								</n-layout>
							</n-notification-provider>
						</n-modal-provider>
					</n-message-provider>
				</n-loading-bar-provider>
			</n-dialog-provider>
		</n-config-provider>
	</NuxtLayout>
</template>

<style lang="scss">
@use '~/styles/transitions/page';
</style>