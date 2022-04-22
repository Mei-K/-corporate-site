export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sample.Inc |  観葉植物・ドライフラワー・雑貨販売店',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'sample plants',
        content:
          '観葉植物・ドライフラワー・雑貨を中心に販売を行なっている会社です。',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Adobe font
      { rel: 'stylesheet', href: 'https://use.typekit.net/mrp6phg.css' },
    ],
    // <link rel="stylesheet" href="https://use.typekit.net/mrp6phg.css"  >
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/common.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/swiper', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
