export default {
  mode: "spa",
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
        content: process.env.npm_package_description || ""
      }
    ],
    script: [{ src: "/typekit.js" }],
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
    "@nuxtjs/markdownit"
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

  generate: {
    routes: function() {
      const fs = require("fs");
      return fs.readdirSync("./assets/content/wiki").map(file => {
        return {
          route: `/${file.slice(2, -5)}`,
          payload: require(`./assets/content/wiki/${file}`)
        };
      });
    }
  }
};
