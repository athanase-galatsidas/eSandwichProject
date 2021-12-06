<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import store from '@/bootstrap/store';

// import AppHeader from '@/components/AppHeader.vue';
import AppHeader from '@/components/AppHeader.vue';
import MenuItem from '@/components/MenuItem.vue';
import SandwichPopup from '@/components/SandwichPopup.vue';
import useFirebase from '@/composable/useFirebase';
import { Sandwich } from '@/interfaces/Sandwich';

export default defineComponent({
	setup() {
		store.dispatch('getData');
		// const { user } = useFirebase();
		const popupVisible = ref(false);
		const selectedSandwich = ref<Sandwich>();

		return {
			popupVisible,
			selectedSandwich,
			// user
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
		SandwichPopup,
	},
	methods: {
		// TODO: make sandwich an interface
		showPopup(sandwich: Sandwich) {
			this.selectedSandwich = sandwich;
			this.popupVisible = true;
		},
		handlePopupClose() {
			this.popupVisible = false;
		},
	},
});
</script>

<template>
	<div>
		<SandwichPopup v-if="popupVisible" :sandwich="selectedSandwich" @closePopup="handlePopupClose()" />
		<AppHeader title="Menu" />
		<div class="container max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
			<div class="container justify-center max-w-screen-md mx-auto flex flex-row flex-wrap items-center content-center">
				<MenuItem
					v-for="(value, key) of menuItems"
					:key="key"
					:name="value.name"
					:image="value.image"
					@click="showPopup(value)"
				/>
			</div>

			<!-- this is a quick & dirty test thingy -->
			<!-- todo: put this in seperate components -->
			<div
				v-show="cartItems.length > 0"
				class="bg-white dark:bg-gray-700 dark:text-gray-200 shadow-md flex flex-col rounded-md w-56 m-2"
			>
				<h3 class="p-4 text-lg">Cart</h3>
				<h4 v-for="(value, key) of cartItems" :key="key" class="px-4 text-lg">
					{{ value.name }}
				</h4>
				<router-link to="/checkout" class="bg-red-500 text-white font-semibold shadow-sm p-2 m-4 rounded-md text-center">
					Check out
				</router-link>
			</div>
			<!-- <p>{{ user?.email }}</p> -->
		</div>
	</div>
</template>
