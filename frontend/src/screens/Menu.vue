<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import store from '../bootstrap/store';

import MenuItem from '../components/MenuItem.vue';
import SandwichPopup from '../components/SandwichPopup.vue';

export default defineComponent({
	setup() {
		store.dispatch('getData');

		const basketItems = ref(Array<String>());
		const popupVisible = ref(false);

		return {
			basketItems,
			popupVisible,
		};
	},
	computed: {
		menuItems() {
			console.log(store.state.sandwitches.length);
			return store.state.sandwitches;
		},
	},
	components: {
		MenuItem,
		SandwichPopup,
	},
	methods: {
		addItemToBasket(name: any) {
			console.log(`clicked by ${name}`);
			this.basketItems.push(name);
		},

		// TODO: make sandwich an interface
		showPopup(sandwich: any) {
			this.popupVisible = true;
			console.log(this.popupVisible);
		},
	},
});
</script>

<template>
	<SandwichPopup v-show="popupVisible" name="test" image="test" />
	<div class="container max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
		<div
			class="
				container
				max-w-screen-md
				mx-auto
				flex flex-row flex-wrap
				items-start
				content-start
			"
		>
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
			v-if="basketItems.length > 0"
			class="
				bg-white
				dark:bg-gray-700 dark:text-gray-200
				shadow-md
				flex flex-col
				rounded-md
				w-56
				m-2
			"
		>
			<h3 class="p-4 text-lg">Basket</h3>
			<h4 v-for="(value, key) of basketItems" :key="key" class="px-4 text-lg">
				{{ value }}
			</h4>
		</div>
	</div>
</template>
