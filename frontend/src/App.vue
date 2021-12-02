<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<main>
		<RouterView />
	</main>
</template>

<style lang="postcss">
html {
	@apply bg-gray-100 dark:bg-gray-800;
}

.dark-logo {
	display: none;
}
@media (prefers-color-scheme: dark) {
	.light-logo {
		display: none;
	}
	.dark-logo {
		display: block;
	}
}
</style>
