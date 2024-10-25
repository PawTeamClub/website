<script setup lang="ts">
import avatar from '~/assets/avatar_main.webp'

const { t } = useI18n({
	useScope: 'local'
})

const member_osu_ids = new Set([
	6786079,
	1759858,
	4850066,
	4313716,
	16191222,
	8693179,
	10233705,

	4850066,
	8693179,
	21425611,
	14944234,
	10233705,

	6336721,
	8837858,
	14814265,
	7293637,
	10233705,
	9872908,

	6336721,
	7143444,
	8664325,
	8837858,
	13478805,
	13188822,
	14906054,
	15096556,
	15305304,
	8301585,
	14858859,
	15176778,
	14814265,
	17709082,
	31185655,
	15838281,
	17945954,
	15832551,
	10233705,
	15555328,
	19900854,
	7794488,
	9872908,
	13821222,
	27416598,
	23294788,
	15141441,
	12435997,
	6814203,
	22318558,
	15807315,

	16303789,
	14748844
])
</script>

<template>
	<n-flex size='small' vertical>

		<n-flex justify="center" align="center">
			<n-image :img-props="{ class: 'w-20' }" :src='avatar'/>
			<n-text class="text-10 fw-bold">{{ t('name') }}</n-text>
		</n-flex>

		<n-card :title="t('intro')" class="w-fit mt-10 mx-auto">
			{{ t('intro_1') }}
			<br>
			{{ t('intro_2') }}
			<br>
			{{ t('intro_3') }}
		</n-card>

		<n-divider>成员列表</n-divider>

		<n-flex justify="center" align="center" size="small">
			<template v-for="id in member_osu_ids">
				<n-button class="w-[32%]" text tag="a" :href="(`https://osu.ppy.sh/users/${id}`)">
					<n-image preview-disabled :img-props="{ class: 'w-full' }" :src="(`https://osekai.net/profiles/img/banner.svg?id=${id}`)"/>
				</n-button>
			</template>
		</n-flex>
	</n-flex>
</template>

<i18n>
{
	"zh": {
		"name": "Paw Team",
		"intro": "介绍",
		"intro_1": "Paw 是一个小动物音游社团，意在聚集玩 osu 的小动物，让大家能够一起交流。",
		"intro_2": "社团中每个小动物都有自己的特色，大家都有各自擅长的领域，都是独一无二的存在。",
		"intro_3": "希望这个社团能成为大家愿意时常来光顾的地方。"
	}
}
</i18n>