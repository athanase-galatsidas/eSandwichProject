<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import useFirebase from '@/composable/useFirebase';

export default defineComponent({
	name: 'AppHeader',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	setup() {
		const { user, logout } = useFirebase();
		const { push } = useRouter();

		const logOutAndRedirect = () => {
			logout()
				.then(() => {
					push('/login');
				})
				.catch((error: Error) => {
					console.error(error);
				});
		};
		return {
			user,
			logOutAndRedirect,
		};
	},
});
</script>

<template>
	<header class="bg-yellow-400 dark:bg-gray-700 p-4 flex justify-between shadow-md">
		<!-- <a class="text-2xl dark:text-gray-200" href="/menu">{{ title }}</a> -->
		<router-link to="/menu" class="text-2xl dark:text-gray-200">{{ title }}</router-link>
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
			<button
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
				@click="logOutAndRedirect"
			>
				Log Out
			</button>
		</nav>
	</header>
</template>
