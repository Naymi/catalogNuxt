export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    noscript: [
      {
        innerHTML: `<div><img src="https://mc.yandex.ru/watch/32288999" style="position:absolute; left:-9999px;" alt="" /></div>`,
      },
    ],
    script: [
      {
        innerHTML:
          '!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?159",t.onload=function(){VK.Retargeting.Init("VK-RTRG-294050-9COPk"),VK.Retargeting.Hit()},document.head.appendChild(t)}();',
      },
      {
        innerHTML: `(function (d, w, c) {
      (w[c] = w[c] || []).push(function () {
        try {
          w.yaCounter32288999 = new Ya.Metrika({
            id: 32288999,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        } catch (e) {}
      });

      var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
          n.parentNode.insertBefore(s, n);
        };
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://mc.yandex.ru/metrika/watch.js";

      if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
      } else {
        f();
      }
    })(document, window, "yandex_metrika_callbacks");`,
      },
    ],
    htmlAttrs: {
      lang: 'ru',
    },
    title:
      'Новостройки Владимира от застройщика с ценами | Купить новостройку во Владимире от застройщика',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Подберем вам квартиру в новостройках Владимира от проверенных застройщиков, которые строят качественное жилье, не срывают сроки строительства и сдают свои объекты вовремя',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'купить новостройку, новостройки владимира, купить новостройку от застройщика, новостройки от застройщика',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/sass/main.sass'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://novostroykivladimira.ru'
        : undefined,
    // proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://novostroykivladimira.ru',
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
  },
}
