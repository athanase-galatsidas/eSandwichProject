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
	<div class="m-1 bg-white drop-shadow-sm flex flex-col rounded-sm">
		<img :src="{ image }" :alt="{ name }" />
		<span class="text-xl p-1 text-center">{{ name }}</span>
	</div>
</template>
