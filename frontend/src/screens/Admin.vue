<script lang="ts">
import { defineComponent, reactive } from 'vue';
import AdminIngredient from '@/components/AdminIngredient.vue';
import useFirebase from '@/composable/useFirebase';
import AppHeader from '@/components/AppHeader.vue';
import store from '@/bootstrap/store';

export default defineComponent({
	name: 'Admin',
	setup() {
		store.dispatch('getAdminData');
	},
	components: {
		AdminIngredient,
		AppHeader,
	},
	computed: {
		ingredients() {
			return store.state.ingredients;
		},
	},
});
</script>

<template>
	<div>
		<AppHeader title="Admin" />
		<div class="flex flex-col mx-auto max-w-screen-md">
			<h3 class="text-3xl text-center my-4 dark:text-white">Stock</h3>
			<AdminIngredient v-for="(value, key) of ingredients" :key="key" :name="value.name" :count="value.count" />
		</div>
	</div>
</template>
