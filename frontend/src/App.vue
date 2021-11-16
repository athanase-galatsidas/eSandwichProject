<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<AppHeader title="Sand Witches eSandwiches Service&trade;" />
	<main>
		<RouterView />
	</main>
</template>

<style lang="postcss">
html {
	@apply bg-gray-100 dark:bg-gray-800;
}
</style>
