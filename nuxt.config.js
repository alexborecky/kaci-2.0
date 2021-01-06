
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Italiana&family=Mulish:wght@300;400;600;700;800&display=swap' ,rel: 'stylesheet'}

    ]
  },
  // pageTransition: {
  //   name: 'slide-bottom',
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_typography.scss',
    '~/assets/scss/_layouts.scss',
    '~/assets/scss/_transitions.scss',
    '~/assets/scss/_hooper.scss',
    '~/assets/animations/_animate.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
    // { src: '~/plugins/fullpage', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-agile'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
