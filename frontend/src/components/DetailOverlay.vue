<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Sandwich } from '@/interfaces/Sandwich';
import store from '@/bootstrap/store';
import DetailItem from '@/components/DetailItem.vue';

export default defineComponent({
	name: 'DetailOverlay',
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
	components: {
		DetailItem,
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
				z-30
				bg-white
				dark:bg-gray-700
				shadow-md
				rounded-md
				overflow-hidden
				container
				max-w-screen-md
				h-96
				p-8
				flex flex-row
				justify-between
			"
			@click="$event.stopPropagation()"
		>
			<section class="flex flex-col justify-between w-full mr-16">
				<div>
					<h3 class="dark:text-gray-200 w-full text-2xl">
						{{ sandwich.name }}
					</h3>
					<p class="dark:text-gray-200 w-full mt-1">{{ sandwich.description }}</p>
				</div>

				<div class="bg-gray-100 w-full h-52 rounded-md shadow-sm py-2">
					<DetailItem v-for="(value, key) of sandwich.ingredients" :key="key" :ingredient="value" />
				</div>
			</section>

			<section class="flex flex-col justify-between items-end">
				<figure class="bg-yellow-300 flex w-72 h-48 rounded-md overflow-hidden">
					<img
						class="w-full justify-self-center self-center shadow-sm"
						:src="sandwich.image"
						:alt="sandwich.name"
					/>
				</figure>
				<button
					class="w-72 text-xl bg-red-500 text-white font-semibold rounded-md p-4 shadow-sm"
					@click="addToCart()"
				>
					Add to Cart (€ {{ sandwich.price.toFixed(2) }})
				</button>
			</section>
		</div>
	</div>
</template>
