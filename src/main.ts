import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store  from '@/store'
import { installElementPlus, setGlobalComponment } from '@/plugins/'
import BaseService from '@/services/base.service'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

// 初始化axios请求
new BaseService();
const app = createApp(App);
installElementPlus(app);
setGlobalComponment(app);
app.use(codemirror).use(store).use(router).mount('#app')
