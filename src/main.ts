import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { setupElement } from '@/plugins/'

const app = createApp(App);
setupElement(app);
app.use(store).use(router).mount('#app')
