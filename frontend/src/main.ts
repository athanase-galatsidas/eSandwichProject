import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/screen.css';
import router from './bootstrap/router';
import store from './bootstrap/store';
import VueAnimateOnScroll from 'vue3-animate-onscroll';

createApp(App).use(router).use(store).use(VueAnimateOnScroll).mount('#app');
