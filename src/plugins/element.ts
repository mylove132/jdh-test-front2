import type { App } from 'vue';
import { ElButton, ElAside, ElCheckbox, ElCheckboxButton, ElRow, ElCol } from "element-plus";
import 'element-plus/lib/theme-chalk/index.css'

export function installElementPlus(app: App<Element>) {
    app.use(ElButton)
        .use(ElAside)
        .use(ElCheckbox)
        .use(ElCheckboxButton);
}