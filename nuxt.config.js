export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5524bd' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.scss'],
  /*
   ** SCSS resources
   */
  styleResources: {
    scss: [
      'assets/styles/settings/variables.scss',
      'assets/styles/tools/mixins.scss'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: 'Github Workflow',
      short_name: 'GH-workflow',
      scope: '/',
      start_url: '/?uml=homescreen',
      theme_color: '#5524bd',
      background_color: '#fcf6f6',
      lang: 'en',
      orientation: 'portrait',
      display: 'standalone'
    },
    workbox: {
      offline: false,
      offlinePage: '/offline.html'
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
