<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Sandwich } from '@/interfaces/Sandwich';
import store from '@/bootstrap/store';

export default defineComponent({
	name: 'SandwichPopup',
	props: {
		sandwich: {
			type: Object as PropType<Sandwich>,
			required: true,
		},
	},
	emits: {
		closePopup: null,
	},
	methods: {
		addToCart() {
			store.commit('addCartItem', this.sandwich);
			this.$emit('closePopup');
		},
	},
});
</script>

<template>
	<div
		class="fixed top-0, left-0 w-screen h-screen bg-black bg-opacity-30 z-20 flex justify-center items-center"
		@click="$emit('closePopup')"
	>
		<div
			class="
				relative
				z-30
				bg-white
				dark:bg-gray-700
				shadow-md
				rounded-md
				overflow-hidden
				container
				max-w-screen-md
				h-96
			"
			@click="$event.stopPropagation()"
		>
			<figure class="bg-yellow-300 flex absolute right-8 top-8 w-64 h-48 rounded-md overflow-hidden">
				<img class="block w-full justify-self-center self-center" :src="sandwich.image" :alt="sandwich.name" />
			</figure>
			<button
				class="absolute bottom-8 right-8 w-64 text-xl bg-red-500 text-white font-semibold rounded-md p-4"
				@click="addToCart()"
			>
				Add to Cart (€ {{ sandwich.price.toFixed(2) }})
			</button>

			<div class="absolute bottom-8 left-8 bg-gray-100 w-96 h-48 p-4 rounded-md">
				<p>{{ sandwich.toppings }}</p>
			</div>

			<h3 class="dark:text-gray-200 w-96 text-2xl px-8 pt-8 pb-4">
				{{ sandwich.name }}
			</h3>
			<p class="dark:text-gray-200 w-96 px-8">{{ sandwich.description }}</p>
		</div>
	</div>
</template>
