<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LandingItem',
	props: {
		inverted: {
			required: false,
			type: Boolean,
		},
		image: {
			required: true,
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
	},
	setup() {},
});
</script>

<template>
	<div
		v-bind:class="{ 'flex-row-reverse text-right': inverted }"
		class="flex h-80 justify-between items-center max-w-screen-lg mx-auto mb-16"
	>
		<div class="w-96">
			<h3 class="text-3xl font-semibold text-red-600 dark:text-white my-4">{{ title }}</h3>
			<slot></slot>
		</div>
		<div class="flex h-full w-96 overflow-hidden rounded-lg">
			<img
				class="block w-full h-full object-cover justify-self-center self-center shadow-md"
				:src="image"
				:alt="image"
			/>
		</div>
	</div>
</template>
