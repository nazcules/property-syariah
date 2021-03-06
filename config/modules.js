import { HOSTNAME, GOOGLE_ANALYTIC, FB_PIXEL_ID } from '../constant'

export default [
  // https://pwa.nuxtjs.org/
  '@nuxtjs/pwa',

  // Doc: https://github.com/vaso2/nuxt-fontawesome#readme
  [
    'nuxt-fontawesome',
    {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }
  ],

  // Doc: https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module#readme
  [
    'nuxt-facebook-pixel-module',
    {
      track: 'PageView',
      pixelId: FB_PIXEL_ID,
      disabled: true
    }
  ],

  // https://github.com/nuxt-community/sitemap-module
  // '@nuxtjs/sitemap',

  // https://github.com/nuxt-community/sentry-module
  // [
  //   '@nuxtjs/sentry',
  //   {
  //     dsn: env.sentryDns
  //     sourceMapStyle: 'hidden-source-map'
  //   }
  // ],

  // https://github.com/nuxt-community/feed-module
  // '@nuxtjs/feed',

  // https://github.com/nuxt-community/analytics-module
  [
    '@nuxtjs/google-analytics',
    {
      id: GOOGLE_ANALYTIC
    }
  ],

  // https://github.com/geeogi/nuxt-responsive-loader
  [
    'nuxt-responsive-loader',
    {
      size: 1920,
      placeholder: true,
      quality: 60,
      adapter: require('responsive-loader/sharp')
    }
  ],

  // https://github.com/nuxt-community/robots-module
  [
    '@nuxtjs/robots',
    {
      Sitemap: `${HOSTNAME}/sitemap.xml`
    }
  ]
]
