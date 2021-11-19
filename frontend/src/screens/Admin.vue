<script lang="ts">
import { defineComponent, reactive } from 'vue';
import AdminIngredient from '@/components/AdminIngredient.vue';
import useFirebase from '@/composable/useFirebase';
export default defineComponent({
	name: 'Admin',
	setup() {
		// TODO: this page should not be accessible for non-admin users
		const { createUser } = useFirebase();

		// TODO: test data
		const ingredients = reactive({
			data: [
				{
					name: 'Bread',
					count: 42,
					image: 'src/assets/logo.png',
				},
				{
					name: 'Cheese',
					count: 38,
					image: 'src/assets/logo.png',
				},
				{
					name: 'Salad',
					count: 2,
					image: 'src/assets/logo.png',
				},
				{
					name: 'Ham',
					count: 8,
					image: 'src/assets/logo.png',
				},
			],
		});

		return {
			ingredients,
		};
	},
	components: {
		AdminIngredient,
	},
});
</script>

<template>
	<div class="flex flex-col mx-auto max-w-screen-md">
		<h3 class="text-3xl text-center my-4 dark:text-white">Stock</h3>
		<AdminIngredient
			v-for="(value, key) of ingredients.data"
			:key="key"
			:name="value.name"
			:count="value.count"
			:image="value.image"
		/>
	</div>
</template>
