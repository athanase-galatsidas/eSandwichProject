import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/screen.css';
import router from './bootstrap/router';
import store from './bootstrap/store';

createApp(App).use(router).use(store).mount('#app');
