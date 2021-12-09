import {
	createWebHistory,
	createRouter,
	RouteRecordRaw,
	Router,
	RouteLocationNormalized,
	NavigationGuardNext,
} from 'vue-router';
import useFirebase from '@/composable/useFirebase';
import store from './store';

const { user } = useFirebase();

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/screens/Home.vue'),
		meta: {
			guest: true,
		},
	},
	{
		name: 'menu',
		path: '/menu',
		component: () => import('@/screens/Menu.vue'),
		meta: {
			guest: true,
		},
	},
	{
		name: 'checkout',
		path: '/checkout',
		component: () => import('@/screens/Checkout.vue'),
		meta: {
			guest: true,
		},
		// redirect to menu if cart is empty
		beforeEnter(to, from, next) {
			if (store.state.cart.length == 0) next('/menu');
			else next();
		},
	},
	{
		name: 'track',
		path: '/track',
		component: () => import('@/screens/Track.vue'),
		meta: {
			guest: true,
		},
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/screens/Login.vue'),
		props: { signup: false },
	},
	{
		name: 'signup',
		path: '/signup',
		component: () => import('@/screens/Signup.vue'),
		props: { signup: true },
	},
	{
		name: 'admin',
		path: '/admin',
		component: () => import('@/screens/Admin.vue'),
		props: { signup: true },
		// Uncomment when admin login is implemented
		// meta: { authRequired: true },
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	//Check a property that you added to the route meta
	if (to.meta.authRequired && to.meta.authRequired === true) {
		if (user.value) {
			if (user.value) next();
			// Else redirect to error or path, etc.
		} else {
			next('/login');
		}
	} else {
		next();
	}
});

export default router;
