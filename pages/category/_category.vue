<template>
  <article class="content">
    <section id="title">
      <div class="post-info">
        <h1>{{categoryPost.title}}</h1>
        <p>{{categoryPost.body}}</p>
      </div>
      <div class="bg-color"></div>
      <div class="bg"></div>
    </section>
    <section id="body">
      <div class="container">
        <div v-html="$md.render(categoryPost.body)"></div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title:
        this.categoryPost.title + " | もりのパーティ公式Wiki もりぱうぃき!",
      script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categoryPost.body
        },
        {
          property: "og:title",
          content: this.categoryPost.title
        },
        {
          property: "og:description",
          content: this.categoryPost.body
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
          content:
            "https://wiki.morino.party/" + this.$nuxt.$route.params.category
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
  async asyncData({ params, payload }) {
    if (payload) return { categoryPost: payload };
    else
      return {
        categoryPost: await require(`~/assets/content/categories/${params.category}.json`)
      };
  }
};
</script>