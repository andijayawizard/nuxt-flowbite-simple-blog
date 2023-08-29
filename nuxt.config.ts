// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      apiKeyAfl: process.env.apiKeyAfl,
      apiUrlAfl: process.env.apiUrlAfl,
      apiKeyFilament: process.env.apiKeyFilament,
      apiUrlFilament: process.env.apiUrlFilament,
    }
  },
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css'
      }],
      script: ['https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js'],
    }
  },
})
