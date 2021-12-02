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
		v-bind:class="{ 'flex-row-reverse ': inverted }"
		class="flex h-80 justify-evenly items-center  max-w-50 mx-auto mb-16 flex-col md:flex-row"
	> 
		<div class="w-96 pb-8 md:pb-0">
			<h3 class="text-center md:ml-4 md:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-red-600 dark:text-white my-4">{{ title }}</h3>
			<slot></slot>
		</div>
		<div class="flex h-full w-30 sm:w-50 md:w-60 lg:w-70 xl:w-80 2xl:w-96  overflow-hidden rounded-lg">
			<img
				class="block  w-40 sm:w-60 md:w-70 lg:w-80 xl:w-90 2xl:w-96 h-full object-cover justify-self-center self-center shadow-md"
				:src="image"
				:alt="image"
			/>
		</div>
	</div>
</template>
