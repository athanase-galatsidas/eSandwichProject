<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
// @ts-ignore
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
		var loggedIn: Ref<boolean>  = ref<boolean>(false);
		const { push } = useRouter();
		const checkLogin= () =>{
			if (user){
				loggedIn = ref<boolean>(true) ;
			}
			else if (!user){
				loggedIn = ref<boolean>(false) ;
			}
		}
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
			loggedIn,
		};
	},
});

</script>

<template>
	<header class="bg-yellow-400 dark:bg-gray-700 p-4 flex justify-between shadow-md">
		<div class="flex items-center justify-center text-2xl dark:text-gray-200">
			<router-link to="/" class="w-12 h-12 -m-2 mr-4">
				<img class="light-logo h-full w-full" src="@/assets/logo_sm.png" alt="a cool logo" />
				<img class="dark-logo h-full w-full" src="@/assets/logo_sm_dark.png" alt="a cool logo" />
			</router-link>
			{{ title }}
		</div>

		<nav class="flex">
			<router-link
				v-if="!user"
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
				v-if="!user"
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
			<router-link
				v-if="user?.email == 'tibo.verbeke@gmail.com' || user?.email == 'docent@howest.be'"
				to="/admin"
				
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
				Admin
			</router-link>
			<button
				v-if="user"
				id="test1"
				v-show="loggedIn"
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
