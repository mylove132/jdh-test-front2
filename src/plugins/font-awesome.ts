import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
    from '@fortawesome/vue-fontawesome'
import { App } from 'vue'

library.add(fas, far, fab)


export function installFontAwesome(app: App<Element>) {

    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component('font-awesome-layers', FontAwesomeLayers)
    app.component('font-awesome-layers-text', FontAwesomeLayersText)
}
