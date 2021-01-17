import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { App } from 'vue'

library.add(faUserSecret)
library.add(faFontAwesome)

const installFontAwesome = (app: App<Element>) => {
    app.component("font-awesome-icon", FontAwesomeIcon);
}

export { 
    installFontAwesome
}