<script setup lang="ts">
import avatar from 'assets/avatar.webp'
import collab_eevee_2_1 from 'assets/collab_eevee_2_1.webp'
import collab_eevee_2_2 from 'assets/collab_eevee_2_2.webp'
import collab_eevee_2_3 from 'assets/collab_eevee_2_3.webp'
import collab_eevee_2_4 from 'assets/collab_eevee_2_4.webp'
import collab_eevee_2_5 from 'assets/collab_eevee_2_5.webp'
import collab_eevee_2_6 from 'assets/collab_eevee_2_6.webp'
import collab_eevee_2_7 from 'assets/collab_eevee_2_7.webp'
import collab_eevee_2_8 from 'assets/collab_eevee_2_8.webp'
import collab_eevee_2_9 from 'assets/collab_eevee_2_9.webp'
import collab_eevee_3 from 'assets/collab_eevee_3.webp'
import { groupBy, pipe, prop } from 'remeda'

const { t } = useI18n({
	useScope: 'local'
})

const members = pipe(
	[
		{
			osu_id: 6786079,
			mode: 'osu'
		},
		{
			osu_id: 1759858,
			mode: 'osu'
		},
		{
			osu_id: 4850066,
			mode: 'osu'
		},
		{
			osu_id: 4313716,
			mode: 'osu'
		},
		{
			osu_id: 16191222,
			mode: 'osu'
		},
		{
			osu_id: 8693179,
			mode: 'osu'
		},
		{
			osu_id: 10233705,
			mode: 'osu'
		},
		{
			osu_id: 23294788,
			mode: 'osu'
		},

		{
			osu_id: 4850066,
			mode: 'taiko'
		},
		{
			osu_id: 8693179,
			mode: 'taiko'
		},
		{
			osu_id: 21425611,
			mode: 'taiko'
		},
		{
			osu_id: 14944234,
			mode: 'taiko'
		},
		{
			osu_id: 10233705,
			mode: 'taiko'
		},
		{
			osu_id: 14748844,
			mode: 'taiko'
		},

		{
			osu_id: 6336721,
			mode: 'catch'
		},
		{
			osu_id: 8837858,
			mode: 'catch'
		},
		{
			osu_id: 14814265,
			mode: 'catch'
		},
		{
			osu_id: 7293637,
			mode: 'catch'
		},
		{
			osu_id: 10233705,
			mode: 'catch'
		},
		{
			osu_id: 9872908,
			mode: 'catch'
		},

		{
			osu_id: 6336721,
			mode: 'mania'
		},
		{
			osu_id: 7143444,
			mode: 'mania'
		},
		{
			osu_id: 8664325,
			mode: 'mania'
		},
		{
			osu_id: 8837858,
			mode: 'mania'
		},
		{
			osu_id: 13478805,
			mode: 'mania'
		},
		{
			osu_id: 13188822,
			mode: 'mania'
		},
		{
			osu_id: 14906054,
			mode: 'mania'
		},
		{
			osu_id: 15305304,
			mode: 'mania'
		},
		{
			osu_id: 8301585,
			mode: 'mania'
		},
		{
			osu_id: 14858859,
			mode: 'mania'
		},
		{
			osu_id: 15176778,
			mode: 'mania'
		},
		{
			osu_id: 14814265,
			mode: 'mania'
		},
		{
			osu_id: 17709082,
			mode: 'mania'
		},
		{
			osu_id: 31185655,
			mode: 'mania'
		},
		{
			osu_id: 15838281,
			mode: 'mania'
		},
		{
			osu_id: 17945954,
			mode: 'mania'
		},
		{
			osu_id: 15832551,
			mode: 'mania'
		},
		{
			osu_id: 10233705,
			mode: 'mania'
		},
		{
			osu_id: 15555328,
			mode: 'mania'
		},
		{
			osu_id: 19900854,
			mode: 'mania'
		},
		{
			osu_id: 7794488,
			mode: 'mania'
		},
		{
			osu_id: 9872908,
			mode: 'mania'
		},
		{
			osu_id: 13821222,
			mode: 'mania'
		},
		{
			osu_id: 27416598,
			mode: 'mania'
		},
		{
			osu_id: 15141441,
			mode: 'mania'
		},
		{
			osu_id: 12435997,
			mode: 'mania'
		},
		{
			osu_id: 6814203,
			mode: 'mania'
		},
		{
			osu_id: 22318558,
			mode: 'mania'
		},
		{
			osu_id: 15807315,
			mode: 'mania'
		},
		{
			osu_id: 14391949,
			mode: 'mania'
		},
		{
			osu_id: 15270411,
			mode: 'mania'
		},
		{
			osu_id: 5010694,
			mode: 'mania'
		},
		{
			osu_id: 14748844,
			mode: 'mania'
		},
		{
			osu_id: 16303789,
			mode: 'mania'
		},
		{
			osu_id: 11829623,
			mode: 'mania'
		},
		{
			osu_id: 20846896,
			mode: 'mania'
		},
		{
			osu_id: 3595196,
			mode: 'mania'
		}
	] satisfies {
		readonly osu_id: number
		readonly mode: 'osu' | 'taiko' | 'catch' | 'mania'
	}[],
	groupBy(
		prop('mode')
	)
)
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

		<div class="my-10">
			<n-scrollbar x-scrollable>
				<n-alert type="success" class="w-fit mx-auto">
					<template #header>
						<n-text type="success">{{ t('team_current_can_join') }}</n-text>
					</template>

					<n-text>{{ t('join_method') }}</n-text>

					<br>
					<n-text>{{ t('join_dc_left') }}&nbsp;</n-text>

					<n-button type="primary" text tag="a" href="https://osu.ppy.sh/users/6336721">
						{{ t('team_leader') }}
					</n-button>

					<n-text>&nbsp;{{ t('join_dc_right') }}</n-text>

					<br>
					<n-text>{{ t('join_qq_left') }}&nbsp;</n-text>

					<n-button type="primary" text tag="a" href="https://osu.ppy.sh/users/6336721">
						{{ t('team_leader') }}
					</n-button>

					<n-text>&nbsp;{{ t('join_qq_right') }}</n-text>

					<br><br>

					<n-text>{{ t('join_notice') }}</n-text>

					<br>
					<n-text>{{ t('join_notice_1_left') }}</n-text>

					<n-popover>
						<template #trigger>
							<n-text class="cursor-pointer" type="info">{{ t('join_notice_1_left_tips') }}</n-text>
						</template>

						<n-text>{{ t('join_notice_1_left_tips_content') }}</n-text>
					</n-popover>

					<br>
					<n-text>{{ t('join_notice_1_right') }}</n-text>

					<n-popover>
						<template #trigger>
							<n-text class="cursor-pointer" type="info">{{ t('join_notice_1_right_tips') }}</n-text>
						</template>

						<n-text>{{ t('join_notice_1_right_tips_content_left') }}</n-text>
						<n-button type="primary" text tag="a" href="https://www.bilibili.com/video/BV1Vt4y1278d">
							{{ t('join_notice_1_right_tips_content_link') }}
						</n-button>
						<n-text>{{ t('join_notice_1_right_tips_content_right') }}</n-text>
					</n-popover>

					<br>
					<n-text>{{ t('join_notice_2') }}</n-text>
					<br>
					<n-text>{{ t('join_notice_3') }}</n-text>
					<br>
					<n-text>{{ t('join_notice_4') }}</n-text>
				</n-alert>
			</n-scrollbar>
		</div>

		<n-divider>{{ t('member_list') }}</n-divider>

		<n-card size="small">
			<n-flex vertical>
				<template v-for="(data, mode) in members">
					<div class="text-center">
						<n-h2 class="!my-5">{{ mode }}</n-h2>
					</div>

					<n-flex justify="center" align="center" size="small">
						<template v-for="member in data">
							<n-button class="w-full sm:w-[32%]" text tag="a" :href="(`https://osu.ppy.sh/users/${member.osu_id}`)">
								<n-image preview-disabled :img-props="{ class: 'w-full' }" :src="(`https://osu-profile-stats.vercel.app/api/profile-stats/${member.osu_id}?playmode=${member.mode === 'catch' ? 'fruits' : member.mode}&version=full`)"/>
							</n-button>
						</template>
					</n-flex>
				</template>
			</n-flex>
		</n-card>

		<n-divider>{{ t('collab_before') }}</n-divider>

		<n-card size="small">
			<n-flex vertical>
				<div class="text-center">
					<n-h2 class="!my-5">{{ t('collab_eevee_2') }}</n-h2>
				</div>

				<n-scrollbar x-scrollable>
					<n-flex vertical align="center" :size="0">
						<n-flex :size="0" :wrap="false">
							<n-button text tag="a" href="https://osu.ppy.sh/users/13478805">
								<n-image preview-disabled :src="collab_eevee_2_1"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/6336721">
								<n-image preview-disabled :src="collab_eevee_2_2"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/13188822">
								<n-image preview-disabled :src="collab_eevee_2_3"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/8664325">
								<n-image preview-disabled :src="collab_eevee_2_4"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/16191222">
								<n-image preview-disabled :src="collab_eevee_2_5"/>
							</n-button>
						</n-flex>

						<n-flex :size="0" :wrap="false">
							<n-button text tag="a" href="https://osu.ppy.sh/users/7143444">
								<n-image preview-disabled :src="collab_eevee_2_6"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/15096556">
								<n-image preview-disabled :src="collab_eevee_2_7"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/4850066">
								<n-image preview-disabled :src="collab_eevee_2_8"/>
							</n-button>

							<n-button text tag="a" href="https://osu.ppy.sh/users/7936634">
								<n-image preview-disabled :src="collab_eevee_2_9"/>
							</n-button>
						</n-flex>
					</n-flex>
				</n-scrollbar>

				<div class="text-center">
					<n-h2 class="!my-5">{{ t('collab_eevee_3') }}</n-h2>
				</div>

				<n-image :img-props="{ class: 'w-full' }" preview-disabled :src="collab_eevee_3"/>
			</n-flex>
		</n-card>
	</n-flex>
</template>

<i18n>
{
	"en": {
		"name": "Paw Team",
		"intro": "About",
		"intro_1": "Paw is a furry music game club that aims to gather small animals that play osu so that everyone can communicate together.",
		"intro_2": "Every animal in the club has its own characteristics, everyone has their own areas of expertise, and they are all unique.",
		"intro_3": "hope this club can become a place that everyone is willing to visit often.",
		"team_current_can_join": "team is currently open to join.",
		"join_method": "How to join",
		"team_leader": "team leader",
		"join_dc_left": "1.Discord server: contact at osu",
		"join_dc_right": ", and will be invited to join the Discord server after passing the review.",
		"join_qq_left": "2.QQ group: contact at osu",
		"join_qq_right": ", and then you will be invited to join the QQ group after passing the review.",
		"join_notice": "Notice",
		"join_notice_1_left": "1. This club only accepts furry. If you are just someone who knows furry or likes furry, you will not be accepted by the club. You can have many children or settings. This is your freedom.",
		"join_notice_1_left_tips": "However, using human settings to communicate is not allowed in the community.",
		"join_notice_1_left_tips_content": "This has been a precedent. Using human settings means that your social circle is not in the same circle as ours. Even if this is not necessarily the case, in order to avoid situations that make us unhappy, the community will directly cut off this phenomenon.",
		"join_notice_1_right": "In short, you must have a furry setting. If you think it is difficult to set it up, or you don't know how to think about it, ",
		"join_notice_1_right_tips": "<How to conceive a furry character?>",
		"join_notice_1_right_tips_content_left": "<",
		"join_notice_1_right_tips_content_link": "How to draw a furry character ???",
		"join_notice_1_right_tips_content_right": "> Produced by 唯兽主义, at least you can have a general understanding of the conception method.",
		"join_notice_2": "2. The club only accepts players of osu!taiko, osu!catch and osu!mania. Players who specialize in other music games and gameplay are not accepted by the club.",
		"join_notice_3": "3. Although this club loves furry, it is not a group that hangs out in the furry circle. We hope that the animals that come here will be careful with their words when communicating.",
		"join_notice_4": "4. When communicating, understand and be careful not to touch some people's bottom line. Memories are permanent.",
		"member_list": "Members List",
		"collab_before": "Collab before",
		"collab_eevee_2": "Second Eevee collab",
		"collab_eevee_3": "Third Eevee collab"
	},
	"zh": {
		"name": "Paw Team",
		"intro": "介绍",
		"intro_1": "Paw 是一个小动物音游社团，意在聚集玩 osu 的小动物，让大家能够一起交流。",
		"intro_2": "社团中每个小动物都有自己的特色，大家都有各自擅长的领域，都是独一无二的存在。",
		"intro_3": "希望这个社团能成为大家愿意时常来光顾的地方。",
		"team_current_can_join": "战队目前开放加入。",
		"join_method": "加入方式",
		"team_leader": "队长",
		"join_dc_left": "1.DC 群: 在 osu 联系",
		"join_dc_right": "，直到通过审核后会邀请进入 DC 群。",
		"join_qq_left": "2.QQ 群: 在 osu 联系",
		"join_qq_right": "，直到通过审核后会邀请进入 Q 群。",
		"join_notice": "注意要点",
		"join_notice_1_left": "1.本社团只接受福瑞，如果你只是知道福瑞或喜欢福瑞的人，是不被社团接受的。你可以有很多个崽或设定，这是你的自由，",
		"join_notice_1_left_tips": "但在社团里不允许使用人类设定来进行交流。",
		"join_notice_1_left_tips_content": "此有前科之鉴。使用人类设定说明你的交际圈和我们并不在一块，即使不一定是这样，但为了避免令我们不快的情况产生，社团将直接隔断此现象产生。",
		"join_notice_1_right": "总而言之，就是你必须得有一个兽设。如果你觉得想设定是个很难的事情，或者你不知道如何着想，",
		"join_notice_1_right_tips": "《如何构思一个兽设？》。",
		"join_notice_1_right_tips_content_left": "由唯兽主义出品的《",
		"join_notice_1_right_tips_content_link": "如何绘制一个兽设???",
		"join_notice_1_right_tips_content_right": "》，至少你能对构思方法有个大致的了解。",
		"join_notice_2": "2.社团只接受 osu!taiko, osu!catch 和 osu!mania 三个模式的玩家，专修其他音游和玩法的玩家是不被社团接受的。",
		"join_notice_3": "3.本社团虽然喜爱福瑞，但并不是什么混福瑞圈子的团体，希望到来的小动物能够注意一下交流时的言辞。",
		"join_notice_4": "4.交流时，了解并注意不要触及一些人的底线。回忆是永久存在的。",
		"member_list": "成员列表",
		"collab_before": "合作往事",
		"collab_eevee_2": "第二次伊布 collab",
		"collab_eevee_3": "第三次伊布 collab"
	}
}
</i18n>