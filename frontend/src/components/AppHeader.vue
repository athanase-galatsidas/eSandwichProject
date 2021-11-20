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
		<div class="flex items-center justify-center text-2xl dark:text-gray-200">
			<router-link to="/menu" class="w-12 h-12 -m-2 mr-4">
				<img class="light-logo h-full w-full" src="src/assets/logo_sm.png" alt="a cool logo" />
				<img class="dark-logo h-full w-full" src="src/assets/logo_sm_dark.png" alt="a cool logo" />
			</router-link>
			{{ title }}
		</div>
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

<style scoped>
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
