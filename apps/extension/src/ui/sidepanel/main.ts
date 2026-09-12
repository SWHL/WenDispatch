import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import AppIcon from '../components/AppIcon.vue';
import 'uno.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.component('AppIcon', AppIcon);
app.mount('#app');
