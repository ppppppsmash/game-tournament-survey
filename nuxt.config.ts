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
      charset: 'utf-8',
      viewport: 'width=device-width',
      title: 'KUROSAWAゲーム大会',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'ゲーム大会アンケート, Created by kurosawa'
        },
        {
          name: 'keywords',
          content: 'テレビゲーム,ゲーム大会'
        },
        {
          name: 'og:locale',
          content: 'ja_JP'
        }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      }
    }
  }
})
