<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserIcon, MailIcon, LockClosedIcon, KeyIcon } from '@heroicons/vue/outline';
import InputGroup from '../components/InputGroup.vue';
import router from '../bootstrap/router';

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

		return {
			showSignUp,
		};
	},
	components: {
		InputGroup,
		UserIcon,
		MailIcon,
		LockClosedIcon,
		KeyIcon,
	},
	methods: {
		toggleSignin(value: boolean) {
			this.showSignUp = value;
		},
		signup() {
			//TODO: sign up
			// redirecting to admin for testing
		},
	},
});
</script>
<template>
	<form
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
		<h3 class="text-2xl mb-2 dark:text-white">Sign up</h3>

		<InputGroup id="username" text="Username">
			<UserIcon class="h-6 w-6 mr-2" />
		</InputGroup>

		<InputGroup id="email" text="E-mail Adress" type="email">
			<MailIcon class="h-6 w-6 mr-2" />
		</InputGroup>

		<InputGroup id="password" text="Password" type="password">
			<KeyIcon class="h-6 w-6 mr-2" />
		</InputGroup>

		<InputGroup id="password-2" text="Repeat Password" type="password">
			<KeyIcon class="h-6 w-6 mr-2" />
		</InputGroup>

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
			value="Sign Up"
		/>

		<p class="cursor-default dark:text-white">
			Already have an account?
			<router-link to="/login" class="cursor-pointer text-red-600 font-semibold">
				Log in!
			</router-link>
		</p>
	</form>
</template>
