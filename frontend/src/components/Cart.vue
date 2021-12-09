<script lang="ts">
import { defineComponent } from 'vue';
import { ShoppingCartIcon } from '@heroicons/vue/outline';
import store from '@/bootstrap/store';

export default defineComponent({
	name: 'Cart',
	props: {
		text: {
			type: String,
			required: true,
		},
		checkout: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	setup() {},
	emits: {
		onCheckout: Boolean,
	},
	computed: {
		cartItems() {
			return store.state.cart;
		},
		subTotal() {
			return store.state.cart.reduce((total, value) => total + value.price, 0).toFixed(2);
		},
	},
	methods: {
		emitOnCheckout() {
			this.$emit('onCheckout', true);
		},
	},
	components: {
		ShoppingCartIcon,
	},
});
</script>

<template>
	<div
		class="
			bg-white
			dark:bg-gray-700 dark:text-gray-200
			shadow-md
			flex flex-col flex-shrink-0 flex-grow-0
			rounded-md
			max-w-full
			mx-8
			lg:mx-0 lg:w-80
			self-start
		"
	>
		<h3 class="p-4 text-lg flex items-center justify-between">
			Cart <span><ShoppingCartIcon class="h-6" /></span>
		</h3>
		<h4
			v-for="(value, key) of cartItems"
			:key="key"
			v-bind:class="{ 'bg-gray-200 dark:bg-gray-600': key % 2 == 0 }"
			class="px-4 text-lg font-medium flex justify-between"
		>
			{{ value.name }} <span class="text-right font-normal">€ {{ value.price }}</span>
		</h4>

		<h4 class="px-4 pt-4 text-lg font-medium flex justify-between">
			Subtotal <span class="text-right font-normal">€ {{ subTotal }}</span>
		</h4>
		<h4 v-if="checkout" class="px-4 text-lg font-medium flex justify-between">
			Btw (6%) <span class="text-right font-normal">€ {{ (subTotal * 0.06).toFixed(2) }}</span>
		</h4>
		<h4 v-if="checkout" class="px-4 pt-2 text-lg font-bold flex justify-between">
			Total <span class="text-right font-semibold">€ {{ (subTotal * 1.06).toFixed(2) }}</span>
		</h4>

		<button
			v-bind:class="{ 'opacity-50 hover:bg-red-500 cursor-not-allowed': cartItems.length == 0 }"
			:disabled="cartItems.length == 0"
			class="
				bg-red-500
				hover:bg-red-400
				transition-colors
				text-white
				font-semibold
				shadow-sm
				p-2
				m-4
				rounded-md
				text-center
			"
			@click="emitOnCheckout()"
		>
			{{ text }}
		</button>
	</div>
</template>
