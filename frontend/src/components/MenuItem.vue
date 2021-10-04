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
	<div class="m-2 w-52 min-w-max bg-white shadow-md flex flex-col rounded-md overflow-hidden">
		<figure class="bg-yellow-300 h-28 overflow-hidden">
			<img class="block w-full" :src="image" :alt="name" />
		</figure>
		<span class="bg-white text-xl p-4 text-center">{{ name }}</span>
	</div>
</template>
