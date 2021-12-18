<script lang="ts">
import { Component, defineComponent, ref } from 'vue';
import store from '@/bootstrap/store';
import AppHeader from '@/components/AppHeader.vue';
import LoadingBar from '@/components/LoadingBar.vue';
import useSocket from '@/composable/useSocket';
import { ClipboardListIcon, CogIcon, LocationMarkerIcon } from '@heroicons/vue/outline';
import { StarIcon } from '@heroicons/vue/solid';

export default defineComponent({
	name: 'Track',
	setup() {},
	mounted() {
		const { emit, on } = useSocket();

		console.log(this.$route.params.orderId);

		// get initial status
		emit('order:status', this.$route.params.orderId);

		// update when status changes
		on(`order:${this.$route.params.orderId}`, (payload: any) => {
			console.log(`received: ${payload}`);
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
			return 5;
		},
	},
	methods: {
		updateStage(stage: number) {
			// testing untill socker server works
			store.commit('setOrderStage', { stage: stage, estimatedDuration: 10 });
			// @ts-ignore
			this.$refs[`bar-${stage}`]?.init();
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
					@onComplete="updateStage(1)"
				>
					<ClipboardListIcon />
				</LoadingBar>
				<LoadingBar
					v-bind:class="{ 'scale-125': orderStage == 1 }"
					:duration="orderDuration"
					ref="bar-1"
					class="w-32 h-32 p-2 transition-transform transform"
					@onComplete="updateStage(2)"
				>
					<CogIcon />
				</LoadingBar>
				<LoadingBar
					v-bind:class="{ 'scale-125': orderStage == 2 }"
					:duration="orderDuration"
					ref="bar-2"
					class="w-32 h-32 p-2 transition-transform transform"
					@onComplete="updateStage(3)"
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

		<div v-show="orderStage == 3" class="max-w-lg mx-auto mt-16 bg-white rounded-md shadow-md p-8 appear">
			<h3 class="text-2xl text-center font-medium">Your order has arrived!</h3>
			<p class="text-lg text-center">Please rate us</p>
			<div class="flex flex-row-reverse justify-center h-12 text-yellow-400">
				<StarIcon class="star opacity-50" />
				<StarIcon class="star opacity-50" />
				<StarIcon class="star opacity-50" />
				<StarIcon class="star opacity-50" />
				<StarIcon class="star opacity-50" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.star:hover,
.star:hover ~ .star {
	opacity: 1;
}
</style>
