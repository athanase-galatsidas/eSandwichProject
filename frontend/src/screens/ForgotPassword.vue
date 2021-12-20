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
	name: 'ForgotPassword',
	props: {
		signup: {
			type: Boolean,
			required: true,
		},
	},
	setup(props) {
		const showSignUp = ref(props.signup);
		const { resetPassword } = useFirebase();
		const { push } = useRouter();
		const loginInput = reactive({ email: ''});
		const loginUser = (event: Event) => {
			event.preventDefault();

			// TODO: error handling
			console.log(loginInput.email);

			if (loginInput.email) {
				resetPassword(loginInput.email)
				push('/login')
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
		<AppHeader title="Forgot Password" />
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
			<h3 class="text-2xl mb-2 dark:text-white">Reset Password</h3>

			<InputGroup
				id="username"
				@onInput="loginInput.email = $event"
				model="loginInput.email"
				text="Username / Email"
				type="email"
			>
				<UserIcon class="h-6 w-6 mr-2" />
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
				value="Reset Password"
			/>

			<p class="cursor-default dark:text-white">
				Remembered your password?
				<router-link to="/signup" class="cursor-pointer text-red-600 font-semibold"> Log in now! </router-link>
			</p>
		</form>
	</div>
</template>
