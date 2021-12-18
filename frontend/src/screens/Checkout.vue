<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import InputGroup from '@/components/InputGroup.vue';
import Cart from '@/components/Cart.vue';
import { LocationMarkerIcon, CashIcon, CreditCardIcon, DeviceMobileIcon } from '@heroicons/vue/outline';
import router from '@/bootstrap/router';
import useGraphql from '@/composable/useGraphql';
import store from '@/bootstrap/store';

export default defineComponent({
	name: 'Checkout',
	setup() {},
	components: {
		AppHeader,
		InputGroup,
		LocationMarkerIcon,
		CashIcon,
		CreditCardIcon,
		DeviceMobileIcon,
		Cart,
	},
	methods: {
		async redirectToTrack() {
			// const { mutation } = useGraphql();
			// const ids: string[] = [];
			// store.state.cart.forEach((sandwich) => {
			// 	ids.push(sandwich.sandwichId);
			// });
			// // TODO: if user is logged in add user id
			// await mutation(
			// 	'addOrder',
			// 	`mutation {
			// 		addOrder(data: {userId: null, sandwiches: []}) {
			// 			orderId
			// 		}
			// 	}`,
			// ).then((data) => {
			// 	console.log(data);
			// 	// router.push({ path: '/track', params: data.orderId });
			// });

			// TODO: fuck graphql
			router.push({ name: 'track', params: { orderId: '46647f52-f67f-4d5f-a262-174cdd4b4a92' } });
		},
	},
});
</script>

<template>
	<div>
		<AppHeader title="Checkout" />
		<div class="mx-auto flex flex-col lg:max-w-6xl lg:flex-row mt-8">
			<form
				class="
					flex flex-col
					items-center
					bg-white
					dark:bg-gray-700
					w-full
					mx-6
					mb-6
					p-4
					lg:mb-0
					rounded-md
					shadow-md
				"
				action=""
			>
				<h3 class="font-semibold text-xl mb-4">Delivery address</h3>
				<InputGroup id="city" text="City">
					<LocationMarkerIcon class="h-6 w-6 mr-2" />
				</InputGroup>
				<InputGroup id="street" text="Street Name">
					<LocationMarkerIcon class="h-6 w-6 mr-2" />
				</InputGroup>
				<InputGroup id="adress" text="Adress" type="number">
					<LocationMarkerIcon class="h-6 w-6 mr-2" />
				</InputGroup>

				<h3 class="font-semibold text-xl my-4">Payment method</h3>

				<div class="w-full flex flex-row justify-center">
					<div class="flex flex-col justify-center items-center mx-2">
						<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
							<input
								type="radio"
								name="payment"
								id="cash"
								class="z-10 absolute left-0 top-0 w-full h-full opacity-0"
								checked="checked"
							/>
							<CashIcon
								class="
									iconbox
									absolute
									left-0
									top-0
									w-full
									h-full
									p-4
									text-gray-500
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
						<span class="text-lg text-center mt-2 font-medium">Cash</span>
					</div>

					<div class="flex flex-col justify-center items-center mx-2">
						<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
							<input
								type="radio"
								name="payment"
								id="card"
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
									p-4
									text-gray-500
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
						<span class="text-lg text-center mt-2 font-medium">Credit card</span>
					</div>

					<div class="flex flex-col justify-center items-center mx-2">
						<div class="relative w-32 h-32 overflow-hidden rounded-xl flex justify-center items-center">
							<input
								type="radio"
								name="payment"
								id="app"
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
									p-4
									text-gray-500
									bg-gray-100
									dark:bg-gray-800 dark:text-white
								"
							/>
						</div>
						<span class="text-lg text-center mt-2 font-medium">Bank app</span>
					</div>
				</div>

				<button
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
						w-64
					"
					@click.prevent="redirectToTrack()"
				>
					Purchase
				</button>
			</form>
			<Cart text="Purchase" :checkout="true" @onCheckout="redirectToTrack()" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
input[type='radio']:checked + .iconbox {
	@apply bg-red-500 text-white;
}
</style>
