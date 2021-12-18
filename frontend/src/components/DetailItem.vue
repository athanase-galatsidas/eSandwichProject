<script lang="ts">
import { Ingredient } from '@/interfaces/Ingredient';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'DetailItem',
	props: {
		ingredient: {
			type: Object as PropType<Ingredient>,
			required: true,
		},
	},
	setup() {},
});
</script>

<template>
	<div class="px-2 py-0">
		<input :id="ingredient.ingredientId" type="checkbox" checked="checked" />
		<label class="text-lg ml-2" :for="ingredient.ingredientId">{{ ingredient.name }}</label>
	</div>
</template>
