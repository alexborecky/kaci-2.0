
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
      { href: 'https://fonts.googleapis.com/css2?family=Italiana&family=Mulish:wght@300;400;600;700;800&display=swap' ,rel: 'stylesheet'},
      { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap' ,rel: 'stylesheet'},
      { href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;600;700&display=swap' ,rel: 'stylesheet'},
    ],
    script: [
      {
        src: "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js?ver=1.3.2",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  // pageTransition: {
  //   name: 'slide-bottom',
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },  
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_typography.scss',
    '~/assets/scss/_layouts.scss',
    '~/assets/scss/_transitions.scss',
    '~/assets/scss/_hooper.scss',
    '~/assets/animations/_animate.scss',
    '~/assets/scss/_agile.scss',
    // '~/assets/scss/demo.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
    // { src: '~/plugins/locomotive.js', ssr: false },
    { src: '~/plugins/both.js' },
    { src: '~/plugins/client.js', mode: 'client' },
    { src: '~/plugins/server.js', mode: 'server' },
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
      '@nuxt/content',
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
