<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { UserIcon, LockClosedIcon } from '@heroicons/vue/outline';
import InputGroup from '@/components/InputGroup.vue';
import AppHeader from '@/components/AppHeader.vue';
import router from '@/bootstrap/router';
import useFirebase from '@/composable/useFirebase';
import { useRouter } from 'vue-router';
import { User } from '@/interfaces/User';

export default defineComponent({
	name: 'Login',
	props: {
		signup: {
			type: Boolean,
			required: true,
		},
	},
	setup(props) {
		const showSignUp = ref(props.signup);
		const { login } = useFirebase();
		const { push } = useRouter();
		const loginInput: User = reactive({ email: '', password: '' });
		const loginUser = (event: Event) => {
			event.preventDefault();

			// TODO: error handling
			console.log(loginInput.email);

			if (loginInput.email && loginInput.password) {
				login(loginInput.email, loginInput.password).then((success: boolean) => {
					if (success) push('/menu');
				});
			}
		};
		return {
			showSignUp,
			loginUser,
			loginInput,
			AppHeader,
		};
	},
	components: {
		InputGroup,
		UserIcon,
		LockClosedIcon,
		AppHeader,
	},
});
</script>

<template>
	<div>
		<AppHeader title="Login" />
		<form
			@submit="loginUser($event)"
			class="
				flex flex-col
				justify-center
				items-center
				p-4
				rounded-md
				mx-auto
				max-w-screen-sm
				dark:bg-gray-700
				bg-white
				shadow-md
				mt-16
			"
		>
			<h3 class="text-2xl mb-2 dark:text-white">Log In</h3>

			<InputGroup
				id="username"
				@onInput="loginInput.email = $event"
				model="loginInput.email"
				text="Username / Email"
			>
				<UserIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<InputGroup
				id="password"
				@onInput="loginInput.password = $event"
				model="loginInput.password"
				text="Password"
				type="password"
			>
				<LockClosedIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<!-- <label class="font-bold block mb-3" for="email">Email address</label>
		<input
			v-model="loginInput.email"
			class="
				hide-on-input
				p-2
				h-9
				w-64
				bg-gray-100
				dark:bg-gray-800 dark:text-white
				rounded-md
				shadow-sm
			"
			type="text"
			id="email"
		/>
		<label class="font-bold block mb-3" for="password">Password</label>
		<input
			v-model="loginInput.password"
			class="
				hide-on-input
				p-2
				h-9
				w-64
				bg-gray-100
				dark:bg-gray-800 dark:text-white
				rounded-md
				shadow-sm
			"
			type="password"
			id="password"
		/> -->
			<span class="cursor-pointer text-red-600 text-sm" @click="toggleSignin(false)"> Forgot password? </span>

			<input
				class="
					cursor-pointer
					hide-on-input
					my-2
					mt-4
					p-2
					h-9
					w-64
					bg-red-500
					text-white
					font-semibold
					rounded-md
					shadow-sm
				"
				type="submit"
				value="Log In"
			/>

			<p class="cursor-default dark:text-white">
				Don't have an account?
				<router-link to="/signup" class="cursor-pointer text-red-600 font-semibold"> Sign up now! </router-link>
			</p>
		</form>
	</div>
</template>
