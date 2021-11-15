<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SandwichPopup',
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
	<div>
		<div class="fixed top-0, left-0 w-screen h-screen bg-black opacity-30 z-20"></div>
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
	</div>
</template>
