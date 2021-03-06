const generateStoryblokUrls = require('./nuxt.generate');
const token = process.env.STORYBLOK_TOKEN;

export default {
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Saludmision',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind-extra.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/story-components',
    '~/plugins/locale',
    '~/plugins/tailwind-components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/svg',
    [
      'storyblok-nuxt',
      {
        accessToken: token,
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  generate: generateStoryblokUrls(token),

  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        es: require('./assets/locales/es.json')
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true // recommended
    }
  },
  googleFonts: {
    families: {
      'Work+Sans': true,
      'Montserrat ': [600, 700, 800, 900]
    }
  }
};
