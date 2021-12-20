<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Sandwich } from '@/interfaces/Sandwich';
import store from '@/bootstrap/store';
import DetailItem from '@/components/DetailItem.vue';

import { StarIcon } from '@heroicons/vue/solid';
import { StarIcon as StarOutline } from '@heroicons/vue/outline';

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
		StarIcon,
		StarOutline,
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
				max-w-screen-sm
				md:max-w-screen-md
				h-96
				p-8
				flex flex-col
				md:flex-row
				justify-between
				mx-8
				md:mx-0
			"
			@click="$event.stopPropagation()"
		>
			<section class="flex flex-col justify-between w-full md:mr-16">
				<div>
					<div class="flex flex-row justify-between items-center w-full">
						<h3 class="dark:text-gray-200 text-2xl">
							{{ sandwich.name }}
						</h3>
						<div class="relative block h-4 w-20 flex-shrink-0">
							<div class="absolute z-20 top-0 left-0 flex text-yellow-400 opacity-50">
								<StarOutline class="w-4 h-4" />
								<StarOutline class="w-4 h-4" />
								<StarOutline class="w-4 h-4" />
								<StarOutline class="w-4 h-4" />
								<StarOutline class="w-4 h-4" />
							</div>
							<div class="absolute z-0 top-0 left-0 flex text-yellow-400">
								<StarIcon class="w-4 h-4" />
								<StarIcon class="w-4 h-4" />
								<StarIcon class="w-4 h-4" />
								<StarIcon class="w-4 h-4" />
								<StarIcon class="w-4 h-4" />
							</div>
							<div
								class="absolute z-10 mx-auto top-0 right-0 bg-white dark:bg-gray-700 h-full"
								v-bind:style="{ width: `${10 - sandwich.rating}0%` }"
							/>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-300 w-full mt-1 pb-2">{{ sandwich.description }}</p>
				</div>

				<div class="bg-gray-100 dark:bg-gray-800 dark:text-white w-full h-52 rounded-md shadow-sm py-2">
					<DetailItem v-for="(value, key) of sandwich.ingredients" :key="key" :ingredient="value" />
				</div>
			</section>

			<section class="flex flex-col justify-between items-end">
				<figure class="bg-yellow-300 hidden md:flex rounded-md overflow-hidden w-72 h-48 w-62">
					<img
						class="w-full justify-self-center self-center shadow-sm"
						:src="sandwich.image"
						:alt="sandwich.name"
					/>
				</figure>
				<button
					class="w-full text-xl bg-red-500 text-white font-semibold rounded-md p-4 shadow-sm"
					@click="addToCart()"
				>
					Add to Cart (€ {{ sandwich.price.toFixed(2) }})
				</button>
			</section>
		</div>
	</div>
</template>
