import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store  from '@/store'
import { installElementPlus } from '@/plugins/'
import 'element-plus/lib/theme-chalk/index.css';
import BaseService from '@/services/base.service'
import 'default-passive-events'

// 初始化axios请求
new BaseService();
const app = createApp(App);
installElementPlus(app);
app.use(store).use(router).mount('#app')
