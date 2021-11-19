<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'Home',
	setup() {},
});
</script>

<template>
	<router-link to="/menu">Order now!</router-link>
</template>
