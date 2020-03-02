export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "もりのパーティ公式Wiki もりぱうぃき!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
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
    hardSource: true,
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
