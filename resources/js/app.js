import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./routes/router";
import { interceptor } from './modules/interceptor';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');

interceptor();

