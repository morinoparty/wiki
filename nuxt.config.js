export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "もりのパーティ公式Wiki もりぱうぃき!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "もりぱうぃき!は、もりのパーティで暮らす、住人の皆さん向けの「情報をまとめる」サイトです。"
      },
      {
        property: "og:title",
        content: "もりのパーティ公式Wiki もりぱうぃき!"
      },
      {
        property: "og:description",
        content:
          "もりぱうぃき!は、もりのパーティで暮らす、住人の皆さん向けの「情報をまとめる」サイトです。"
      },
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "og:site_name",
        content: "もりのパーティ!公式Wiki もりぱうぃき!"
      },
      {
        property: "og:url",
        content: "https://wiki.morino.party/"
      },
      {
        property: "og:image",
        content: "https://wiki.morino.party/img/background_ap_2.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "morinoparty"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap"
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://wiki.morino.party",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false
  },
  generate: {
    routes: function() {
      const fs = require("fs");
      return fs.readdirSync("./assets/content/wiki").map(file => {
        return {
          route: `/${file.slice(0, -5)}`,
          payload: require(`./assets/content/wiki/${file}`)
        };
      });
    }
  }
};
