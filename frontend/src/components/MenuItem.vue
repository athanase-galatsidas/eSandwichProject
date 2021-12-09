<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MenuItem',
	props: {
		name: {
			type: String,
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
	<div
		class="
			m-2
			w-56
			bg-white
			dark:bg-gray-700
			shadow-md
			flex flex-col
			rounded-md
			overflow-hidden
			cursor-pointer
			select-none
			hover-effect
		"
	>
		<figure class="bg-yellow-300 h-28 overflow-hidden flex">
			<img
				class="block w-full justify-self-center self-center transition-transform transform"
				:src="image"
				:alt="name"
			/>
		</figure>
		<span class="dark:text-gray-200 text-lg p-4 text-center">
			{{ name }}
		</span>
	</div>
</template>

<style lang="postcss" scoped>
.hover-effect:hover img {
	@apply scale-110 -rotate-3;
}
</style>
