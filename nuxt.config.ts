// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/scss/main.scss'
  ],
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
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'ウェブクルー ゲーム大会',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      }
    }
  }
})
