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

/* needed for appear plugin */
@keyframes appear {
	from {
		opacity: 0;
		transform: translateY(50%) scale(0.9);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.appear {
	animation-name: appear;
	animation-duration: 1s;
	animation-fill-mode: forwards;
}
</style>
