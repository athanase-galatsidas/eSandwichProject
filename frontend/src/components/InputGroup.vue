<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'InputGroup',
	props: {
		id: {
			type: String,
			required: true,
		},
		model: {
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
});
</script>

<template>
	<div class="relative my-2">
		<input
			:id="id"
			:type="type"
			:v-model="model"
			placeholder=" "
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
		/>
		<label
			:for="id"
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
</style>
