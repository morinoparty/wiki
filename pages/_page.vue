<template>
  <div class="all">
    <side />
    <article class="content">
      <section id="title">
        <div class="post-info">
          <h1>{{wikiPost.title}}</h1>
          <p>{{wikiPost.description}}</p>
        </div>
        <div class="bg-color"></div>
        <style v-if="wikiPost.image">
  .all article.content section#title .bg {
    z-index: 1;
    height: 200px;
    background: url({{wikiPost.image}}) 50% / cover no-repeat;
  }
  .all article.content section#title .bg:before {
    display: none;
  }
        </style>
        <div class="bg"></div>
      </section>
      <section id="body">
        <div class="container">
          <div v-html="$md.render(wikiPost.body)"></div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import side from "~/components/aside.vue";

export default {
  head() {
    return {
      title: this.wikiPost.title + " | もりのパーティ公式Wiki もりぱうぃき!",
      script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.wikiPost.description
        },
        {
          property: "og:title",
          content: this.wikiPost.title
        },
        {
          property: "og:description",
          content: this.wikiPost.description
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
          content: "https://wiki.morino.party/" + this.$nuxt.$route.params.page
        },
        {
          property: "og:image",
          content: this.wikiPost.image
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "morinoparty"
        }
      ]
    };
  },

  components: {
    side
  },
  async asyncData({ params, payload }) {
    if (payload) return { wikiPost: payload };
    else
      return {
        wikiPost: await require(`~/assets/content/wiki/${params.page}.json`)
      };
  }
};
</script>