import { createApp } from 'vue';

// проверка данных с формы (чтобы не было пустых вводов)
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './assets/main.scss';
import App from './App.vue';


createApp(App)
.use(Toast)
.mount('#app')
