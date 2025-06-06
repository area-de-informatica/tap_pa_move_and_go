// import this after install `@mdi/font` package
//import '@mdi/font/css/materialdesignicons.css'

//import 'vuetify/styles'
//import { createVuetify } from 'vuetify'

//export default defineNuxtPlugin((app) => {
//const vuetify = createVuetify({
    // ... your configuration
//})
//app.vueApp.use(vuetify)
//})
// plugins/vuetify.ts

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
