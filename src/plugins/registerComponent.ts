import type { App } from 'vue';
import Loading from "@/components/common/element/Loading/index.vue";


export function setGlobalComponment(app: App<Element>) {
    app.component('Loading', Loading);
}
