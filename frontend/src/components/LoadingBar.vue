<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue';

export default defineComponent({
	name: 'LoadingBar',
	props: {
		size: {
			required: false,
			type: Number,
			default: 8,
		},
		speed: {
			required: false,
			type: Number,
			default: 1,
		},
		duration: {
			required: false,
			type: Number,
			default: 10,
		},
	},
	setup() {
		const completed = ref(false);
		return {
			completed,
		};
	},
	emits: {
		onComplete: Boolean,
	},
	mounted() {
		// this.init();
	},
	methods: {
		init() {
			const c = this.$refs['c'] as HTMLCanvasElement;
			const ctx = c.getContext('2d');
			const bg = getComputedStyle(this.$refs['bg'] as HTMLCanvasElement, null);

			// typescript is annoying
			if (ctx === null) return;

			let offset = 0;
			let progress = 0;
			const fillSpeed = 1 / this.duration;

			const bubbles = [
				{ x: Math.random() * c.width, y: c.height, r: 4 },
				{ x: Math.random() * c.width, y: c.height, r: 8 },
				{ x: Math.random() * c.width, y: c.height, r: 16 },
				{ x: Math.random() * c.width, y: c.height, r: 4 },
				{ x: Math.random() * c.width, y: c.height, r: 8 },
			];

			const draw = () => {
				ctx.clearRect(0, 0, c.width, c.height);

				const fill = bg.getPropertyValue('background-color');

				ctx.beginPath();
				ctx.moveTo(0, c.height);
				ctx.lineTo(c.width, c.height);

				// offset the height
				const height = (c.height - this.size) * (1 - progress / 100);
				const width = c.width;
				// const centre = c.width / 2;

				// const t = Math.abs(Math.sin(0.5 - offset / width)); // creates an animation timing curve
				const t = offset / width;

				ctx.lineTo(width, height);

				// draw waves
				ctx.quadraticCurveTo(width * 1.75 - offset, height + this.size, width * 1.5 - offset, height);
				ctx.quadraticCurveTo(width * 1.25 - offset, height - this.size, width * 1.0 - offset, height);
				ctx.quadraticCurveTo(width * 0.75 - offset, height + this.size, width * 0.5 - offset, height);
				ctx.quadraticCurveTo(width * 0.25 - offset, height - this.size, width * 0.0 - offset, height);

				ctx.lineTo(0, c.height);
				ctx.closePath();
				ctx.fillStyle = fill;
				ctx.fill();

				// draw bubbles
				bubbles.forEach((bubble) => {
					drawBubble(ctx, fill, height, bubble);
				});

				// animation stuff
				offset += this.speed;
				progress += fillSpeed;
				if (offset > width) offset = 0;

				// for performance stop rendering when bar is full
				if (progress < 100) requestAnimationFrame(draw);
				else {
					// emit event when bar is filled
					this.$emit('onComplete', true);
					this.completed = true;
				}
			};

			const drawBubble = (ctx: CanvasRenderingContext2D, fill: any, resetHeight: number, bubble: any) => {
				ctx.beginPath();
				ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
				ctx.closePath();
				ctx.fillStyle = fill;
				ctx.fill();

				bubble.y -= bubble.r / 20;
				if (bubble.y + bubble.r < 0) {
					bubble.r = 4 + Math.random() * 8;
					bubble.x = Math.random() * c.width;
					bubble.y = resetHeight + bubble.r;
				}
			};

			draw();
		},
	},
});
</script>

<template>
	<div>
		<aside ref="bg" class="hidden bg-yellow-400"></aside>
		<canvas
			v-show="!completed"
			class="w-full h-full bg-red-500 border-red-500 border-4 rounded-full"
			ref="c"
			width="128"
			height="128"
		></canvas>
		<div v-show="completed" class="w-full h-full rounded-full border-red-500 border-4 bg-yellow-400"></div>
		<div class="absolute w-full h-full top-0 left-0 p-4 text-white">
			<slot></slot>
		</div>
	</div>
</template>
