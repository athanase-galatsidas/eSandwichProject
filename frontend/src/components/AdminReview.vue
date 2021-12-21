<script lang="ts">
import { Review } from '@/interfaces/review';
import { defineComponent, PropType } from 'vue';
import { StarIcon } from '@heroicons/vue/solid';
import { StarIcon as StarOutline } from '@heroicons/vue/outline';

export default defineComponent({
	name: 'AdminReview',
	props: {
		review: {
			type: Object as PropType<Review>,
			required: true,
		},
	},
	components: {
		StarIcon,
		StarOutline,
	},
	setup() {},
});
</script>

<template>
	<div
		class="
			flex flex-col
			items-center
			justify-center
			w-60
			h-28
			p-4
			overflow-hidden
			bg-white
			dark:bg-gray-700
			rounded-md
			shadow-md
			m-2
		"
	>
		<div class="relative block h-4 w-20 flex-shrink-0">
			<div class="absolute z-20 top-0 left-0 flex text-yellow-400 opacity-50">
				<StarOutline class="w-4 h-4" />
				<StarOutline class="w-4 h-4" />
				<StarOutline class="w-4 h-4" />
				<StarOutline class="w-4 h-4" />
				<StarOutline class="w-4 h-4" />
			</div>
			<div class="absolute z-0 top-0 left-0 flex text-yellow-400">
				<StarIcon class="w-4 h-4" />
				<StarIcon class="w-4 h-4" />
				<StarIcon class="w-4 h-4" />
				<StarIcon class="w-4 h-4" />
				<StarIcon class="w-4 h-4" />
			</div>
			<div
				class="absolute z-10 mx-auto top-0 right-0 bg-white dark:bg-gray-700 h-full"
				v-bind:style="{ width: `${10 - review.rating}0%` }"
			/>
		</div>
		<span v-if="review.comment" class="py-2">"{{ review.comment }}"</span>
	</div>
</template>
