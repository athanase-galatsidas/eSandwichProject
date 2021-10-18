<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

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

		const basketItems = ref(Array<String>());

		return {
			menuItems,
			basketItems,
		};
	},
	components: {
		MenuItem,
	},
	methods: {
		addItemToBasket(name: any) {
			console.log(`clicked by ${name}`);
			this.basketItems.push(name);
		},
	},
});
</script>

<template>
	<div class="container max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
		<div
			class="
				container
				max-w-screen-md
				mx-auto
				flex flex-row flex-wrap
				items-start
				content-start
			"
		>
			<MenuItem
				v-for="(value, key) of menuItems.data"
				:key="key"
				:name="value.name"
				:image="value.image"
				@click="addItemToBasket(value.name)"
			/>
		</div>

		<!-- this is a quick & dirty test thingy -->
		<!-- todo: put this in seperate components -->
		<div
			v-if="basketItems.length > 0"
			class="
				bg-white
				dark:bg-gray-700 dark:text-gray-200
				shadow-md
				flex flex-col
				rounded-md
				w-56
				m-2
			"
		>
			<h3 class="p-4 text-lg">Basket</h3>
			<h4 v-for="(value, key) of basketItems" :key="key" class="px-4 text-lg">
				{{ value }}
			</h4>
		</div>
	</div>
</template>
