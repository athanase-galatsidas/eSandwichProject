<script lang="ts">
import { Component, defineComponent, ref } from 'vue';
import store from '@/bootstrap/store';
import AppHeader from '@/components/AppHeader.vue';
import LoadingBar from '@/components/LoadingBar.vue';
import useSocket from '@/composable/useSocket';
import useGraphql from '@/composable/useGraphql';
import { ClipboardListIcon, CogIcon, LocationMarkerIcon } from '@heroicons/vue/outline';
import { StarIcon } from '@heroicons/vue/solid';

export default defineComponent({
	name: 'Track',
	data() {
		return {
			comment: '',
		};
	},
	setup() {
		const status = ref(0);
		const rating = ref(0);
		const ratingSubmitted = ref(false);

		return {
			rating,
			status,
			ratingSubmitted,
		};
	},
	props: {},
	mounted() {
		const { emit, on } = useSocket();

		console.log(`id: ${this.$route.params.orderId}`);

		// get initial status
		emit('order:status', this.$route.params.orderId);

		// update when status changes
		on('order:update', (payload: any) => {
			console.log(`received: ${payload.status}`);

			// TODO: this broke the day before the presentation :/
			// if (payload.id == this.$route.params.orderId) {
			// 	if (this.status != payload.status) {
			// 		this.status = payload.status;
			// 		this.updateStage(payload.status);
			// 	}
			// }

			this.status++;
			this.updateStage(this.status);
		});

		this.updateStage(0);
	},
	components: {
		AppHeader,
		LoadingBar,
		ClipboardListIcon,
		CogIcon,
		LocationMarkerIcon,
		StarIcon,
	},
	computed: {
		orderStage() {
			return store.state.trackStage.stage; // TODO: backend
		},
		orderDuration() {
			// return store.state.trackStage.estimatedDuration;
			return 30;
		},
		cartItems() {
			return store.state.cart;
		},
		subTotal() {
			return store.state.cart.reduce((total, value) => total + value.price, 0).toFixed(2);
		},
	},
	methods: {
		updateStage(stage: number) {
			store.commit('setOrderStage', { stage: stage, estimatedDuration: 60 });
			// @ts-ignore
			this.$refs[`bar-${stage}`]?.init();

			if (stage != 0)
				// @ts-ignore
				this.$refs[`bar-${stage - 1}`]?.speedUp();
		},

		rate(value: number) {
			this.rating = value;
		},

		async submitRating() {
			const { mutation } = useGraphql();

			await mutation(
				'addReview',
				`mutation DddReview { addReview(data: {
				rating: ${this.rating * 2},
				comment: "${this.comment.trim()}" }) {reviewId} }`,
			);

			this.ratingSubmitted = true;
		},
	},
});
</script>

<template>
	<div>
		<AppHeader title="Track your order" />
		<div>
			<div class="relativew-full h-32 mt-16 flex flex-row justify-around">
				<LoadingBar
					v-bind:class="{ 'scale-125': orderStage == 0 }"
					:duration="orderDuration"
					ref="bar-0"
					class="w-32 h-32 p-2 transition-transform transform"
				>
					<ClipboardListIcon />
				</LoadingBar>
				<LoadingBar
					v-bind:class="{ 'scale-125': orderStage == 1 }"
					:duration="orderDuration"
					ref="bar-1"
					class="w-32 h-32 p-2 transition-transform transform"
				>
					<CogIcon />
				</LoadingBar>
				<LoadingBar
					v-bind:class="{ 'scale-125': orderStage == 2 }"
					:duration="orderDuration"
					ref="bar-2"
					class="w-32 h-32 p-2 transition-transform transform"
				>
					<LocationMarkerIcon />
				</LoadingBar>
			</div>
			<div class="flex flex-row justify-around mt-8 text-center text-lg text-gray-400 dark:text-gray-500">
				<h3 v-bind:class="{ 'text-black dark:text-white font-medium': orderStage == 0 }">
					Your order is being processed.
				</h3>
				<h3 v-bind:class="{ 'text-black dark:text-white font-medium': orderStage == 1 }">
					Your order is being prepared.
				</h3>
				<h3 v-bind:class="{ 'text-black dark:text-white font-medium': orderStage == 2 }">
					Your order is being delivered.
				</h3>
			</div>
		</div>

		<div
			v-show="orderStage == 3"
			class="max-w-lg mx-auto mt-16 bg-white dark:bg-gray-700 dark:text-white rounded-md shadow-md p-8 appear"
		>
			<h3 class="text-2xl text-center font-medium">Your order has arrived!</h3>
			<div v-if="!ratingSubmitted">
				<p class="text-lg text-center mb-4">Please rate us</p>
				<div class="flex flex-row-reverse justify-center h-12 text-yellow-400">
					<StarIcon @click="rate(5)" v-bind:class="{ highlight: rating == 5 }" class="star opacity-50" />
					<StarIcon @click="rate(4)" v-bind:class="{ highlight: rating == 4 }" class="star opacity-50" />
					<StarIcon @click="rate(3)" v-bind:class="{ highlight: rating == 3 }" class="star opacity-50" />
					<StarIcon @click="rate(2)" v-bind:class="{ highlight: rating == 2 }" class="star opacity-50" />
					<StarIcon @click="rate(1)" v-bind:class="{ highlight: rating == 1 }" class="star opacity-50" />
				</div>
				<div>
					<label class="hidden" for="comment">comment</label>
					<textarea
						id="comment"
						v-model="comment"
						placeholder="comment (optional)"
						class="
							p-2
							h-10
							my-4
							resize-y
							w-full
							bg-gray-100
							dark:bg-gray-800 dark:text-white
							rounded-md
							shadow-sm
						"
						autocomplete="off"
					/>
					<button
						v-bind:class="{ 'opacity-50 hover:bg-red-500 cursor-not-allowed': rating == 0 }"
						:disabled="rating == 0"
						class="
							block
							bg-red-500
							hover:bg-red-400
							transition-colors
							text-white
							font-semibold
							shadow-sm
							p-2
							m-4
							mx-auto
							w-32
							rounded-md
							text-center
						"
						@click="submitRating()"
					>
						Rate us!
					</button>
				</div>
			</div>
			<p v-else class="text-lg text-center mb-4">Thank you for rating us!</p>
		</div>

		<div
			class="
				max-w-lg
				justify-center
				mx-auto
				mt-20
				rounded-md
				dark:text-white
				bg-white
				dark:bg-gray-700
				shadow-md
				p-5
			"
		>
			<h4
				v-for="(value, key) of cartItems"
				:key="key"
				v-bind:class="{ 'bg-gray-200 dark:bg-gray-900': key % 2 == 0 }"
				class="px-4 text-lg font-medium flex justify-between"
			>
				{{ value.name }}
				<span class="text-right font-normal flex justify-center"> € {{ value.price }} </span>
			</h4>
		</div>
	</div>
</template>

<style scoped>
.star:hover,
.star:hover ~ .star {
	opacity: 1;
}

.highlight,
.highlight ~ .star {
	opacity: 1;
}
</style>
