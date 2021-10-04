<script lang="ts">
import { defineComponent, reactive } from 'vue';

import MenuItem from '../components/MenuItem.vue';

export default defineComponent({
	setup() {
		// todo: get this from api
		const menuItems = reactive({
			data: [
				{
					name: 'Basic Sandwich',
					image: 'src/assets/logo.png',
				},
				{
					name: 'Less Basic Sandwich',
					image: 'src/assets/logo.png',
				},
				{
					name: 'Regular Sandwich',
					image: 'src/assets/logo.png',
				},
				{
					name: 'Special Sandwich',
					image: 'src/assets/logo.png',
				},
				{
					name: 'Extra Special Sandwich',
					image: 'src/assets/logo.png',
				},
			],
		});

		return {
			menuItems,
		};
	},
	components: {
		MenuItem,
	},
});
</script>

<template>
	<div class="container max-w-screen-md mx-auto flex flex-row flex-wrap justify-center">
		<MenuItem
			v-for="(value, key) of menuItems.data"
			:key="key"
			:name="value.name"
			:image="value.image"
		/>
	</div>
</template>
