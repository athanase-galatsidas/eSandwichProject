<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IconCheckbox',
	props: {
		id: {
			required: true,
		},
		name: {
			required: false,
		},
		type: {
			required: false,
			default: 'checkbox',
		},
	},
	setup() {},
});
</script>

<template>
	<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
		<input :type="type" :name="name" :id="id" class="z-10 absolute left-0 top-0 w-full h-full opacity-50" />
		<slot class="iconbox absolute left-0 top-0 w-full h-full bg-gray-100 dark:bg-gray-800 dark:text-white"> </slot>
	</div>
</template>
