export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@unocss/nuxt', "i18n"],
  devtools: { enabled: true },
  nitro:{
    devProxy: {
        '/api': {
            target: 'http://localhost:3000'
        }
    }
  }
})