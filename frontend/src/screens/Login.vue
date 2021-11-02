<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserIcon } from '@heroicons/vue/outline';

export default defineComponent({
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
		UserIcon,
	},
	methods: {
		toggleSignin(value: boolean) {
			this.showSignUp = value;
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
			bg-white
			mt-16
		"
	>
		<h3 class="text-2xl mb-2" v-if="showSignUp">Sign up</h3>
		<h3 class="text-2xl mb-2" v-else>Log In</h3>

		<div class="relative my-2">
			<input
				id="email"
				type="text"
				placeholder=" "
				class="hide-on-input p-2 h-9 w-64 bg-gray-100 rounded-md shadow-sm"
			/>
			<label
				for="email"
				class="absolute h-9 px-2 left-0 top-0 flex items-center text-gray-500 select-none"
			>
				<UserIcon class="h-6 w-6 mr-1" /> email
			</label>
		</div>

		<input v-if="showSignUp" type="submit" value="Sign Up" />
		<input v-else type="submit" value="Log in" />

		<p v-if="showSignUp" class="cursor-default">
			Already have an account?
			<span class="cursor-pointer text-red-600 font-semibold" @click="toggleSignin(false)">
				Log in here!
			</span>
		</p>
		<p v-else class="cursor-default">
			Don't have an account?
			<span class="cursor-pointer text-red-600 font-semibold" @click="toggleSignin(true)">
				Sign up now!
			</span>
		</p>
	</form>
</template>

<style scoped>
/* 
this hides the label after the input when its filled in
used to hide icon & placeholder label
important: for this to work the input must be placed before the label and it must have a placeholder text " "
*/
.hide-on-input:active + label,
.hide-on-input:focus + label,
.hide-on-input:not(:placeholder-shown) + label {
	opacity: 0; /* using anything other than opacity to hide this causes weird behaviour */
}
</style>
