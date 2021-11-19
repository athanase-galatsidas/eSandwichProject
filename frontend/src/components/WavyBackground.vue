<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'WavyBackground',
	props: {
		size: {
			required: true,
			type: Number,
		},
		speed: {
			required: true,
			type: Number,
		},
	},
	mounted() {
		const c = document.getElementById('c') as HTMLCanvasElement;
		const ctx = c.getContext('2d');

		// get the specific color of yellow
		const fill = window
			.getComputedStyle(document.querySelector('h1') as Element, null)
			.getPropertyValue('background-color');

		// typescript is annoying
		if (ctx === null) return;

		this.init(c, ctx, fill);
	},
	methods: {
		init(c: HTMLCanvasElement, ctx: CanvasRenderingContext2D, fill: string) {
			let offset = 0;

			const draw = () => {
				ctx.clearRect(0, 0, c.width, c.height);

				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(c.width, 0);

				// offset the height
				const height = c.height - this.size;
				const width = c.width;

				ctx.lineTo(width, height);

				// draw path
				ctx.quadraticCurveTo(
					width * 1.75 - offset,
					height + this.size,
					width * 1.5 - offset,
					height,
				);
				ctx.quadraticCurveTo(
					width * 1.25 - offset,
					height - this.size,
					width * 1.0 - offset,
					height,
				);
				ctx.quadraticCurveTo(
					width * 0.75 - offset,
					height + this.size,
					width * 0.5 - offset,
					height,
				);
				ctx.quadraticCurveTo(
					width * 0.25 - offset,
					height - this.size,
					width * 0.0 - offset,
					height,
				);

				ctx.lineTo(0, c.height);
				ctx.closePath();
				ctx.fillStyle = fill;
				ctx.fill();

				offset += this.speed;

				if (offset > width) offset = 0;

				requestAnimationFrame(draw);
			};

			draw();
		},
	},
});
</script>

<template>
	<canvas class="absolute w-full h-72" id="c"></canvas>
</template>
