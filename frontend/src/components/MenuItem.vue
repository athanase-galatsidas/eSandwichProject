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
		available: {
			type: Boolean,
			required: true,
		},
	},
	setup() {},
});
</script>

<template>
	<div
		class="
			relative
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
		<figure class="bg-gray-200 dark:bg-gray-600 h-28 overflow-hidden flex justify-center">
			<img
				v-bind:class="{ 'filter blur-sm transform-none': !available }"
				class="block w-full justify-self-center self-center transition-transform transform"
				v-lazy="{ src: image }"
				:alt="name"
			/>
			<img class="absolute w-20 h-20 mt-4" src="@/assets/loader.png" />
		</figure>
		<span class="dark:text-gray-200 text-lg p-4 text-center">
			{{ name }}
		</span>
		<div v-if="!available" class="bg-white opacity-60 w-full h-full absolute z-10 flex justify-center">
			<span class="text-3xl text-gray-400 font-semibold mt-9">Sold out!</span>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.hover-effect:hover img {
	@apply scale-110 -rotate-3;
}

img[lazy='loaded'] + img {
	@apply hidden;
}
</style>
