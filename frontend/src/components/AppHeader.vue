<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppHeader',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	setup() {},
});
</script>

<template>
	<header class="bg-red-400 p-4">
		<h1 class="text-2xl">{{ title }}</h1>
	</header>
</template>
