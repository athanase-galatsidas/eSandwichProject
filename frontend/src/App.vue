<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import MenuItem from './components/MenuItem.vue';

import './router';
</script>

<template>
	<AppHeader title="Sand Witches eSandwiches Service&trade;" />
	<MenuItem name="test" image="../assets/vue.png" />
	<main>
		<router-view />
	</main>
</template>

<style lang="postcss">
html {
	@apply bg-gray-100 dark:bg-gray-800;
}
</style>
