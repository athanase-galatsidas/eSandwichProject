import { createWebHistory, createRouter } from 'vue-router';
import Menu from '../screens/Menu.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Menu,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
