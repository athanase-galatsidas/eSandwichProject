<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LandingItem',
	props: {
		inverted: {
			required: false,
			type: Boolean,
			default: true,
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
		v-bind:class="{ 'flex-col md:flex-row-reverse': inverted == true }"
		class="opacity-0 flex h-80 justify-evenly items-center max-w-50 mx-auto mt-64 flex-col md:flex-row"
		v-animate-onscroll="{ down: 'appear' }"
	>
	<div class="flex h-full w-30 sm:w-50 md:w-60 lg:w-70 xl:w-80 2xl:w-96 overflow-hidden rounded-lg">
			<img
				class="
					block
					w-40
					sm:w-60
					md:w-70
					lg:w-80
					xl:w-90
					2xl:w-96
					h-full
					object-cover
					justify-self-center
					self-center
					shadow-md
				"
				:src="image"
				:alt="image"
			/>
		</div>
		<div class="w-96 pb-8">
			<h3
				class="
					text-lg
					md:text-xl
					lg:text-2xl
					xl:text-3xl
					font-semibold
					text-red-600
					dark:text-white
					my-4
					text-center
					md:text-left
				"
			>
				{{ title }}
			</h3>
			<slot></slot>
		</div>
		
	</div>
</template>
