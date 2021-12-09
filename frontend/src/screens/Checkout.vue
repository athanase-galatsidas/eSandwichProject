<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import InputGroup from '@/components/InputGroup.vue';
import Cart from '@/components/Cart.vue';
import { LocationMarkerIcon, CashIcon, CreditCardIcon, DeviceMobileIcon } from '@heroicons/vue/outline';
import router from '@/bootstrap/router';

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
});
</script>

<template>
	<div>
		<AppHeader title="Checkout" />
		<div class="mx-auto flex flex-col lg:max-w-6xl lg:flex-row mt-8">
			<form class="bg-white dark:bg-gray-700 mx-8 mb-6 p-4 lg:mb-0 lg:mx-auto rounded-md shadow-md" action="">
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
					<div class="relative w-32 h-32 mx-8 overflow-hidden rounded-xl flex justify-center items-center">
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
			<Cart text="Purchase" :checkout="true" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
input[type='radio']:checked + .iconbox {
	@apply bg-red-500 text-white;
}
</style>
