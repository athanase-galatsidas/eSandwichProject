import { createWebHistory, createRouter, RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('../screens/Menu.vue'),
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
