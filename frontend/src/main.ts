import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/screen.css';
import router from './bootstrap/router';
import store from './bootstrap/store';

import VueLazyLoad from 'vue3-lazyload';
import VueAnimateOnScroll from 'vue3-animate-onscroll';

createApp(App).use(router).use(store).use(VueLazyLoad).use(VueAnimateOnScroll).mount('#app');
