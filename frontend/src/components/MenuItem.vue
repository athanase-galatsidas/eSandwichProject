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
			w-52
			min-w-max
			bg-white
			dark:bg-gray-700
			shadow-md
			flex flex-col
			rounded-md
			overflow-hidden
		"
	>
		<figure class="bg-yellow-300 h-28 overflow-hidden">
			<img class="block w-full" :src="image" :alt="name" />
		</figure>
		<span class="dark:text-gray-200 text-lg p-4 text-center">
			{{ name }}
		</span>
	</div>
</template>
