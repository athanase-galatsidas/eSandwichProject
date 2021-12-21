<script lang="ts">
import { defineComponent, reactive } from 'vue';
import AdminIngredient from '@/components/AdminIngredient.vue';
import useFirebase from '@/composable/useFirebase';
import AppHeader from '@/components/AppHeader.vue';
import store from '@/bootstrap/store';
import useSocket from '@/composable/useSocket';
import AdminReview from '@/components/AdminReview.vue';

export default defineComponent({
	name: 'Admin',
	setup() {
		store.dispatch('getAdminData');
	},
	components: {
		AdminIngredient,
		AppHeader,
		AdminReview,
	},
	computed: {
		ingredients() {
			return store.state.ingredients;
		},
		reviews() {
			return store.state.reviews;
		},
	},
	methods: {
		updateOrder() {
			const { emit } = useSocket();
			emit('order:process', '');
		},
	},
});
</script>

<template>
	<div>
		<AppHeader title="Admin" />

		<div class="flex flex-col mx-auto max-w-screen-md">
			<h3 class="text-2xl text-center my-4 dark:text-white">Stock</h3>
			<AdminIngredient v-for="(value, key) of ingredients" :key="key" :name="value.name" :count="value.count" />
		</div>

		<div class="mx-auto max-w-screen-md mt-8">
			<h3 class="text-2xl text-center my-4 dark:text-white">Recent reviews</h3>
			<div class="flex flex-row flex-wrap justify-between -mx-2">
				<AdminReview v-for="(value, key) of reviews" :key="key" :review="value" />
			</div>
		</div>

		<div class="my-16 flex flex-col mx-auto max-w-screen-md">
			<h3 class="text-2xl text-center my-4 dark:text-white">Orders</h3>
			<button
				v-bind:class="{ 'opacity-50 hover:bg-red-500 cursor-not-allowed': rating == 0 }"
				:disabled="rating == 0"
				class="
					block
					bg-red-500
					hover:bg-red-400
					transition-colors
					text-white
					font-semibold
					shadow-sm
					p-2
					m-4
					mx-auto
					w-64
					rounded-md
					text-center
				"
				@click="updateOrder()"
			>
				Advance Order Stage
			</button>
		</div>
	</div>
</template>
