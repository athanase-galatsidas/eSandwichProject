import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/screen.css';
import router from './bootstrap/router';

createApp(App).use(router).mount('#app');
