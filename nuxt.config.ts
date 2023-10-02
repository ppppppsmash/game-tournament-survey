// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/scss/main.scss'
  ],
  googleFonts: {
    googleFonts: {
      preload: true,
      useStylesheet: true
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Press+Start+2P': true,
      }
    }]
  ],
  runtimeConfig: {
    public: {
      // key
    }
  }
})
