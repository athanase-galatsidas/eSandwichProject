<script lang="ts">
import { defineComponent, reactive } from 'vue';

import MenuItem from '../components/MenuItem.vue';

export default defineComponent({
	setup() {
		// todo: get this from api
		const menuItems = reactive({
			data: {},
		});

		menuItems.data = [
			{
				name: 'Basic Sandwich',
				image: '../assets/logo.png',
			},
			{
				name: 'Less Basic Sandwich',
				image: '../assets/logo.png',
			},
		];

		return {
			menuItems,
		};
	},
});
</script>

<template>
	<div class="flex flex-row h-100">
		<MenuItem
			v-for="(value, key) of menuItems.data"
			:key="key"
			:name="value.name"
			:image="value.image"
		/>
	</div>
</template>
