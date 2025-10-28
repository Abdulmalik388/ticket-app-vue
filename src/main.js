import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Toast, { position: "top-right" });
app.mount('#app');
