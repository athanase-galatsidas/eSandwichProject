<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'InputGroup',
	emits: {
		onInput: String,
	},
	data() {
		return {
			inputfield: '',
		};
	},
	setup() {
		const valid = ref(true);

		return {
			valid,
		};
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: 'text',
		},
	},
	methods: {
		emitInputStateChanged(e: Event) {
			// validate input
			this.inputfield = this.inputfield.trim();
			this.valid = this.inputfield != '';

			this.$emit('onInput', this.inputfield);
		},
	},
});
</script>

<template>
	<div class="flex flex-col-reverse">
		<section class="relative my-2">
			<input
				:id="id"
				:type="type"
				v-model="inputfield"
				v-bind:class="{ 'bg-opacity-25 bg-red-500 dark:bg-red-500 border text-red-600 border-red-500': !valid }"
				@blur="emitInputStateChanged($event)"
				placeholder=" "
				class="hide-on-input p-2 h-9 w-64 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-sm"
			/>
			<label
				:for="id"
				v-bind:class="{ 'text-red-600': !valid }"
				class="
					cursor-text
					absolute
					h-9
					px-2
					left-0
					top-0
					flex
					items-center
					text-gray-500
					dark:text-white
					select-none
				"
			>
				<slot></slot>
				{{ text }}
			</label>
		</section>
		<span v-bind:class="{ hidden: valid }" class="text-red-600 text-center text-sm w-full font-medium">
			invalid {{ text }}!
		</span>
	</div>
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

/* browser defaults annoy me and i dont know how to change this in tailwind... */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type='number'] {
	-moz-appearance: textfield;
}
</style>
