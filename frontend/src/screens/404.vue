<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {},
});
</script>

<template>
	<div>
		<div
			class="bg-white dark:bg-gray-700 max-w-md m-auto flex flex-col items-center rounded-md shadow-md p-6 mt-24"
		>
			<h1 class="text-3xl font-medium dark:text-white">Error 404</h1>
			<img class="w-48 my-8" src="@/assets/404_xl.png" alt="" />
			<h3 class="text-2xl dark:text-white">Something went wrong.</h3>
			<router-link
				to="/"
				class="
					bg-red-500
					text-center
					hover:bg-red-400
					transition-colors
					text-white
					font-medium
					mt-4
					w-40
					p-2
					rounded-md
				"
			>
				Go back home
			</router-link>
		</div>
	</div>
</template>
