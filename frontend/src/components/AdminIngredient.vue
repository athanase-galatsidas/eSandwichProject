<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AdminIngredient',
	props: {
		name: {
			type: String,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	setup() {},
});
</script>

<template>
	<div class="flex w-full h-32 overflow-hidden bg-white rounded-md shadow-md my-2">
		<figure class="w-32 flex-shrink-0 bg-yellow-300 overflow-hidden">
			<img class="w-full" :src="image" :alt="name" />
		</figure>
		<div class="py-2 px-4 w-full">
			<p
				class="text-xl p-2 rounded-md border border-red-900 text-red-900 bg-red-200"
				v-if="count < 5"
			>
				Very low on {{ name }}!
			</p>
			<p
				class="
					text-xl
					p-2
					rounded-md
					border border-yellow-700
					text-yellow-700
					bg-yellow-200
				"
				v-else-if="count < 10"
			>
				Low on {{ name }}!
			</p>
			<p class="text-xl">{{ name }}</p>
			<p class="text-gray-600">{{ count }}</p>
		</div>
	</div>
</template>
