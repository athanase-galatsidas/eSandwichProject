<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MenuItemSkeleton',
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
		"
	>
		<figure class="bg-gray-200 dark:bg-gray-600 h-28 overflow-hidden flex justify-center flicker">
			<img class="absolute w-20 h-20 mt-4" src="@/assets/loader.png" />
		</figure>
		<div class="dark:text-gray-200 text-lg p-4">
			<div class="bg-gray-200 dark:bg-gray-600 w-full h-7 flicker" />
		</div>
	</div>
</template>

<style scoped>
.flicker {
	animation: flicker 0.5s ease-in-out 0s infinite alternate both;
}

@keyframes flicker {
	from {
		opacity: 1;
	}
	to {
		opacity: 0.5;
	}
}
</style>
