// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-12',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt'],
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  
})
