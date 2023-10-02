// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/scss/main.scss'
  ],
  build: {
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      // key
    }
  }
})
