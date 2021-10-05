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
	<header class="bg-yellow-400 dark:bg-gray-700 p-4">
		<h1 class="text-2xl dark:text-gray-200">{{ title }}</h1>
	</header>
</template>
