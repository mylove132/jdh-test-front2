import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { installElementPlus, setGlobalComponment } from '@/plugins/'
import BaseService from '@/services/base.service'
import '@/assets/styles/theme/variable.scss';

// 初始化axios请求
new BaseService();
const app = createApp(App);
installElementPlus(app);
setGlobalComponment(app);
app.use(store).use(router).mount('#app')
