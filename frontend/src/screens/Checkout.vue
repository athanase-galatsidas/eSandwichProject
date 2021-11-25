<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/bootstrap/store';
import AppHeader from '@/components/AppHeader.vue';
import InputGroup from '@/components/InputGroup.vue';
import { LocationMarkerIcon, CashIcon, CreditCardIcon, DeviceMobileIcon } from '@heroicons/vue/outline';

export default defineComponent({
	name: 'Checkout',
	setup() {},
	computed: {
		cartItems() {
			return store.state.cart;
		},
		subTotal() {
			return store.state.cart.reduce((total, value) => total + value.price, 0).toFixed(2);
		},
	},
	components: {
		AppHeader,
		InputGroup,
		LocationMarkerIcon,
		CashIcon,
		CreditCardIcon,
		DeviceMobileIcon,
	},
});
</script>

<template>
	<div>
		<AppHeader title="Checkout" />
		<div class="container max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
			<div
				class="
					bg-white
					dark:bg-gray-700 dark:text-gray-200
					container
					rounded-md
					p-4
					max-w-screen-md
					mr-4
					flex flex-row flex-wrap
					items-start
					content-start
					shadow-md
				"
			>
				<form action="">
					<h3 class="font-semibold text-xl mb-4">Delivery address</h3>
					<InputGroup id="city" model="city" text="City">
						<LocationMarkerIcon class="h-6 w-6 mr-2" />
					</InputGroup>
					<InputGroup id="street" model="street" text="Street Name">
						<LocationMarkerIcon class="h-6 w-6 mr-2" />
					</InputGroup>
					<InputGroup id="adress" model="adress" text="Adress" type="number">
						<LocationMarkerIcon class="h-6 w-6 mr-2" />
					</InputGroup>

					<h3 class="font-semibold text-xl my-4">Payment method</h3>

					<div class="w-full flex">
						<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
							<input
								type="radio"
								name="payment"
								id="cash"
								checked="checked"
								class="z-10 absolute left-0 top-0 w-full h-full opacity-0"
							/>
							<CashIcon
								class="
									iconbox
									absolute
									left-0
									top-0
									w-full
									h-full
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
						<div
							class="relative w-32 h-32 mx-8 overflow-hidden rounded-xl flex justify-center items-center"
						>
							<input
								type="radio"
								name="payment"
								id="credit"
								class="z-10 absolute left-0 top-0 w-full h-full opacity-0"
							/>
							<CreditCardIcon
								class="
									iconbox
									absolute
									left-0
									top-0
									w-full
									h-full
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
						<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
							<input
								type="radio"
								name="payment"
								id="cash"
								class="z-10 absolute left-0 top-0 w-full h-full opacity-0"
							/>
							<DeviceMobileIcon
								class="
									iconbox
									absolute
									left-0
									top-0
									w-full
									h-full
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
					</div>
				</form>
			</div>

			<div
				class="
					bg-white
					dark:bg-gray-700 dark:text-gray-200
					shadow-md
					flex flex-col flex-shrink-0
					rounded-md
					w-80
				"
			>
				<h3 class="p-4 text-lg">Cart</h3>
				<h4 v-for="(value, key) of cartItems" :key="key" class="px-4 text-lg font-medium flex justify-between">
					{{ value.name }} <span class="text-right font-normal">€ {{ value.price }}</span>
				</h4>
				<h4 class="px-4 pt-2 text-lg font-medium flex justify-between">
					Subtotal <span class="text-right font-normal">€ {{ subTotal }}</span>
				</h4>
				<h4 class="px-4 text-lg font-medium flex justify-between">
					Btw (6%) <span class="text-right font-normal">€ {{ (subTotal * 0.06).toFixed(2) }}</span>
				</h4>
				<h4 class="px-4 pt-2 text-lg font-bold flex justify-between">
					Total <span class="text-right font-semibold">€ {{ (subTotal * 1.06).toFixed(2) }}</span>
				</h4>
				<router-link
					to="/checkout"
					class="bg-red-500 text-white font-semibold shadow-sm p-2 m-4 rounded-md text-center"
				>
					Purchase
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
input[type='radio']:checked + .iconbox {
	@apply bg-red-500 text-white;
}
</style>