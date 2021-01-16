import type { App } from 'vue';
import { ElButton, ElAside, ElCheckbox, ElCheckboxButton } from "element3";

export function setupElement(app: App<Element>) {
    app.use(ElButton)
        .use(ElAside)
        .use(ElCheckbox)
        .use(ElCheckboxButton);
}