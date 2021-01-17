import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { installElementPlus, setGlobalComponment, installFontAwesome } from '@/plugins/'
import Request from '@/services/base.service'
import '@/assets/styles/theme/variable.scss';
import 'font-awesome/css/font-awesome.min.css';

// 初始化axios请求
new Request();
const app = createApp(App);
installElementPlus(app);
installFontAwesome(app);
setGlobalComponment(app);
app.use(store).use(router).mount('#app')
