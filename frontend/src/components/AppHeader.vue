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
	<header class="bg-yellow-400 dark:bg-gray-700 p-4 flex justify-between shadow-md">
		<h1 class="text-2xl dark:text-gray-200">{{ title }}</h1>
		<!-- TODO: this needs to change to username when logged in -->
		<nav class="flex">
			<router-link
				to="/login"
				class="
					flex
					justify-center
					items-center
					bg-white
					hover:bg-gray-200
					dark:bg-gray-800 dark:hover:bg-gray-900
					text-black
					dark:text-gray-50
					shadow-sm
					transition-colors
					font-semibold
					rounded-md
					px-4
					ml-4
					w-24
				"
			>
				Log In
			</router-link>
			<router-link
				to="/signup"
				class="
					flex
					justify-center
					items-center
					bg-red-500
					hover:bg-red-400
					dark:bg-gray-200 dark:hover:bg-gray-400
					text-white
					dark:text-black
					shadow-sm
					transition-colors
					font-semibold
					rounded-md
					px-4
					ml-4
					w-24
				"
			>
				Sign Up
			</router-link>
		</nav>
	</header>
</template>
