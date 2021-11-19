<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import LandingItem from '@/components/LandingItem.vue';
import { LinkIcon } from '@heroicons/vue/outline';

export default defineComponent({
	name: 'Home',
	setup() {
		// const c = document.getElementById('c') as HTMLCanvasElement;
		// const ctx = c.getContext('2d');
		// const fill = window
		// 	.getComputedStyle(document.querySelector('.bg-yellow-400') as Element)
		// 	.getPropertyValue('background-color');
		// console.log(fill);
	},
	methods: {},
	components: {
		LandingItem,
		LinkIcon,
	},
});
</script>

<template>
	<div class="flex justify-center items-center h-64 bg-yellow-400 text-6xl">
		<h1>Sandwitches</h1>
		<!-- <canvas class="absolute w-full h-72" id="c"></canvas> -->
	</div>
	<div class="flex justify-center items-center h-64">
		<router-link
			class="
				flex
				justify-center
				text-2xl
				items-center
				cursor-pointer
				m-4
				p-6
				h-9
				w-64
				bg-red-500
				text-white
				font-semibold
				rounded-md
				shadow-sm
				hover-effect
			"
			to="/menu"
		>
			Order now!
		</router-link>
	</div>

	<LandingItem title="Handled with care" image="src/assets/images/landing_cook.jpeg">
		<p>
			When you order a Sandwitch Sandwichservice Sandwich you are
			<span class="underline">guaranteed</span> the best quality sandwich created by our
			beloved below-minimum wage workers.
		</p>
	</LandingItem>

	<div class="bg-element"></div>

	<LandingItem
		title="Only the best ingredients"
		image="src/assets/images/landing_food.jpeg"
		inverted="true"
	>
		<p>
			Our sandwiches are crafted with only <span class="underline">the best</span> hand picked
			ingredients that we could find at the local discount market.
		</p>
	</LandingItem>

	<LandingItem
		title="Shipped right to your doorstep"
		image="src/assets/images/landing_delivery.jpeg"
	>
		<p>
			We are commited to delivering our sandwiches to your doorstep so that you can enjoy our
			sandwiches from the confort of your own home.
		</p>
	</LandingItem>

	<div class="flex justify-center items-center h-64">
		<router-link
			class="
				flex
				justify-center
				text-2xl
				items-center
				cursor-pointer
				m-4
				p-6
				h-9
				w-64
				bg-red-500
				text-white
				font-semibold
				rounded-md
				shadow-sm
				hover-effect
			"
			to="/menu"
		>
			Order now!
		</router-link>
	</div>

	<footer class="bg-gray-200 text-gray-500 w-full h-32 p-8 flex items-end justify-between">
		<div>
			<p>&copy; Athanase Galatsidas & Tibo Verbeke</p>
			<a class="flex" href="https://github.com/athanase-galatsidas">
				<LinkIcon class="w-4 ml-4 mr-1" />
				athanase galatsidas
			</a>
			<a class="flex" href="https://github.com/VerbekeTibo">
				<LinkIcon class="w-4 ml-4 mr-1" />
				tibo verbeke
			</a>
		</div>

		<p>royalty free stock images from pexels.com</p>
	</footer>
</template>

<style lang="postcss" scoped>
.hover-effect {
	transform: none;
	transition: transform 0.2s ease-in-out;
}

.hover-effect:hover {
	transform: scale(1.2);
}

.bg-element {
	@apply bg-yellow-400 absolute w-full h-64;
	z-index: -10;
	transform: skewY(4deg);
}
</style>
