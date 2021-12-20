<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { UserIcon, MailIcon, LockClosedIcon, KeyIcon } from '@heroicons/vue/outline';
import InputGroup from '@/components/InputGroup.vue';
import AppHeader from '@/components/AppHeader.vue';
import useFirebase from '@/composable/useFirebase';
import router from '@/bootstrap/router';
import { User } from '@/interfaces/User';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'Signup',
	props: {
		signup: {
			type: Boolean,
			required: true,
		},
	},

	setup(props) {
		const { push } = useRouter();

		// const { createUser } = useFirebase();
		// const userInput: User = reactive({
		// 	name: '',
		// 	email: '',
		// 	password: '',
		// });
		// const passwordRepeat = ref('');
		// const registerAccount = (event: Event) => {
		// 	event.preventDefault();
		// 	if (userInput.name && userInput.email && userInput.password && passwordRepeat.value == userInput.name) {
		// 		console.log('Correct with ', userInput);
		// 		createUser(userInput.name, userInput.email as string, userInput.password as string);
		// 	} else {
		// 		console.log('Invalid input ', userInput);
		// 	}
		// };
		// const showSignUp = ref(props.signup);
		// return {
		// 	registerAccount,
		// 	userInput,
		// 	showSignUp,
		// 	passwordRepeat,
		// };

		// // return {
		// // 	userInput,
		// // 	createUser,
		// //
		// // };

		// },
		const { createUser } = useFirebase();
		const userInput: User = reactive({
			name: '',
			email: '',
			password: '',
		});
		const passwordRepeat = ref('');

		const registerAccount = (event: Event) => {
			event.preventDefault();
			if (userInput.name && userInput.email && userInput.password) {
				// console.log('Correct with ', userInput);
				createUser(userInput.name, userInput.email as string, userInput.password as string);
			} else {
				// console.log('Invalid input ', userInput);
			}
		};
		const showSignUp = ref(props.signup);
		return {
			registerAccount,
			userInput,
			showSignUp,
		};
	},
	components: {
		InputGroup,
		UserIcon,
		MailIcon,
		LockClosedIcon,
		KeyIcon,
		AppHeader,
	},
	methods: {
		toggleSignin(value: boolean, reference:string) {
			this.showSignUp = value;
			//@ts-ignore
			this.$refs[reference]?.invalidate()
		},
		signup() {
			//TODO: sign up
			// redirecting to admin for testing
			// push('/home');
		},
		
	},
});
</script>
<template>
	<div>
		<AppHeader title="Signup" />
		<form
			@submit="registerAccount($event)"
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

			<InputGroup id="username" ref="username" @onInput="userInput.name = $event" text="Username">
				<UserIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<InputGroup id="email"  ref="email" @onInput="userInput.email = $event" text="E-mail Adress" type="email">
				<MailIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<InputGroup id="password"  ref="password" @onInput="userInput.password = $event" text="Password" type="password">
				<KeyIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<InputGroup id="password-repeat"  ref="rpassword" @onInput="passwordRepeat = $event" text="Repeat Password" type="password">
				<KeyIcon class="h-6 w-6 mr-2" />
			</InputGroup>

			<!-- <label class="font-bold block mb-3" for="name">Name</label>
		<input
			v-model="userInput.name"
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
			id="name"
		/>
		<label class="font-bold block mb-3" for="email">Email address</label>
		<input
			v-model="userInput.email"
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
			v-model="userInput.password"
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
				value="Sign Up"
			/>
			<p class="cursor-default dark:text-white">
				Already have an account?
				<router-link to="/login" class="cursor-pointer text-red-600 font-semibold"> Log in! </router-link>
			</p>
		</form>
	</div>
</template>
