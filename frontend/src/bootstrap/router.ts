import { createWebHistory, createRouter, RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('../screens/Menu.vue'),
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('../screens/Login.vue'),
		props: { signup: false },
	},
	{
		name: 'signup',
		path: '/signup',
		component: () => import('../screens/Login.vue'),
		props: { signup: true },
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
