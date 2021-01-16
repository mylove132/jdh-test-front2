import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { setupElement, setGlobalComponment } from '@/plugins/'

const app = createApp(App);
setupElement(app);
setGlobalComponment(app);
app.use(store).use(router).mount('#app')
