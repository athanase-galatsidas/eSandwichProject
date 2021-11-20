<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { LinkIcon } from '@heroicons/vue/outline';

import LandingItem from '@/components/LandingItem.vue';
import WavyBackground from '@/components/WavyBackground.vue';

export default defineComponent({
	name: 'Home',
	setup() {},
	components: {
		LandingItem,
		LinkIcon,
		WavyBackground,
	},
});
</script>

<template>
	<div>
		<div class="flex justify-center items-center h-64 text-6xl">
			<!-- wavy background uses computed bg style of h1, so put a background on it! -->
			<h1 class="bg-yellow-400 dark:bg-gray-500 z-10 ">Sandwitches</h1>
			<WavyBackground v-bind:speed="0.5" v-bind:size="16" />
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
			<p class="dark:text-white">
				When you order a Sandwitch Sandwichservice Sandwich you are
				<span class="underline">guaranteed</span> the best quality sandwich created by our beloved below-minimum
				wage workers.
			</p>
		</LandingItem>

		<div class="bg-element"></div>

		<LandingItem title="Only the best ingredients" image="src/assets/images/landing_food.jpeg" inverted="true">
			<p class="dark:text-white">
				Our sandwiches are crafted with only <span class="underline">the best</span> hand picked ingredients
				that we could find at the local discount market.
			</p>
		</LandingItem>

		<LandingItem title="Shipped right to your doorstep" image="src/assets/images/landing_delivery.jpeg">
			<p class="dark:text-white">
				We are commited to delivering our sandwiches to your doorstep so that you can enjoy our sandwiches from
				the confort of your own home.
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
	</div>
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
	@apply bg-yellow-400 absolute w-full h-64 dark:bg-gray-500;
	z-index: -10;
	transform: skewY(4deg);
}
</style>
