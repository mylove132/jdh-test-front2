import type { App } from 'vue';
import Loading from "@/components/common/element/loading.vue";


export function setGlobalComponment(app: App<Element>) {
    app.component('FeatureComponent');
}
