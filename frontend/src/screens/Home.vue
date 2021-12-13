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
		<div class="flex justify-center items-center h-64">
			<div class="z-10 w-10 h-10 sm:w-12 sm:h-12 mr-4">
				<img
					class="light-logo h-10 w-10 sm:h-12 sm:w-12 md:h-13 md:w-13"
					src="src/assets/logo_xl.png"
					alt="a cool logo"
				/>
				<img
					class="dark-logo h-10 w-10 sm:h-12 sm:w-12 md:h-13 md:w-13"
					src="src/assets/logo_xl_dark.png"
					alt="a cool logo"
				/>
			</div>
			<!-- wavy background uses computed bg style of h1, so put a background on it! -->
			<h1 class="dark:text-white z-10 text-2xl md:text-3xl xl:text-5xl">
				eSand<span class="text-red-500 font-bold text-3xl md:text-4xl xl:text-6xl">Witches</span>
			</h1>
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
					transition-transform
					transform
					hover:scale-125
				"
				to="/menu"
			>
				Order now!
			</router-link>
		</div>

		<LandingItem title="Handled with care" image="src/assets/images/landing_cook.jpeg">
			<p class="dark:text-gray-300 text-left md:pl-4 text-sm md:text-lg">
				When you order a Sandwitch Sandwichservice Sandwich you are
				<span class="underline">guaranteed</span> the best quality sandwich created by our beloved below-minimum
				wage workers.
			</p>
		</LandingItem>

		<div class="bg-yellow-400 dark:bg-gray-700 absolute w-full h-64 -z-10 transform skew-y-6"></div>

		<LandingItem title="Only the best ingredients" image="src/assets/images/landing_food.jpeg" inverted="true">
			<p class="dark:text-gray-300 text-sm md:pl-4 md:text-lg">
				Our sandwiches are crafted with only <span class="underline">the best</span> hand picked ingredients
				that we could find at the local discount market.
			</p>
		</LandingItem>

		<LandingItem title="Shipped right to your doorstep" image="src/assets/images/landing_delivery.jpeg">
			<p class="dark:text-gray-300 text-center md:text-left md:pl-4 text-sm md:text-lg">
				We are commited to delivering our sandwiches to your doorstep so that you can enjoy our sandwiches from
				the comfort of your own home.
			</p>
		</LandingItem>

		<div class="flex justify-center items-center h-64 my-32">
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
					transition-transform
					transform
					hover:scale-125
				"
				to="/menu"
			>
				Order now!
			</router-link>
		</div>

		<footer
			class="
				bg-gray-200
				text-gray-500
				dark:bg-gray-700 dark:text-white
				w-full
				h-50
				md:h-32
				p-8
				flex
				items-end
				justify-between
			"
		>
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

			<p>images from pexels.com</p>
		</footer>
	</div>
</template>
