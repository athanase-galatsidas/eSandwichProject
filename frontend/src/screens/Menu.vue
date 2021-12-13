<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '@/bootstrap/store';

import AppHeader from '@/components/AppHeader.vue';
import MenuItem from '@/components/MenuItem.vue';
import DetailOverlay from '@/components/DetailOverlay.vue';
import Cart from '@/components/Cart.vue';
import { Sandwich } from '@/interfaces/Sandwich';
import router from '@/bootstrap/router';

export default defineComponent({
	setup() {
		store.dispatch('getData');
		const selectedSandwich = ref<Sandwich>();

		return {
			selectedSandwich,
		};
	},
	computed: {
		menuItems() {
			return store.state.sandwitches;
		},
		cartItems() {
			return store.state.cart;
		},
	},
	components: {
		AppHeader,
		MenuItem,
		DetailOverlay,
		Cart,
	},
	methods: {
		// TODO: make sandwich an interface
		showPopup(sandwich: Sandwich) {
			console.log(sandwich);

			this.selectedSandwich = sandwich;
		},
		handlePopupClose() {
			this.selectedSandwich = undefined;
		},
		redirectToCheckout() {
			router.push('/checkout');
		},
	},
});
</script>

<template>
	<div>
		<DetailOverlay v-if="selectedSandwich" :sandwich="selectedSandwich" @closePopup="handlePopupClose()" />
		<AppHeader title="Menu" />
		<div class="mx-auto flex flex-col lg:max-w-6xl lg:flex-row mt-8">
			<div class="mx-6 mb-6 lg:mb-0 lg:mx-auto flex flex-row flex-wrap items-start content-start">
				<MenuItem
					v-for="(value, key) of menuItems"
					:key="key"
					:name="value.name"
					:image="value.image"
					:available="value.available"
					@click="showPopup(value)"
				/>
			</div>
			<Cart text="Checkout" @onCheckout="redirectToCheckout()" />
		</div>
	</div>
</template>
