import { createApp } from 'vue';
import { createPinia } from 'pinia';
import naive from 'naive-ui';
import App from './App.vue';
import AppIcon from '../components/AppIcon.vue';
import 'uno.css';
import './markdown-preview.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(naive);
app.component('AppIcon', AppIcon);
app.mount('#app');
