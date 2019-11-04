<template>
  <div class="all">
    <side />
    <article class="content">
      <section id="title">
        <div class="post-info">
          <h1>{{wikiPost.title}}</h1>
        </div>
        <div class="bg-color"></div>
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
  components: {
    side
  },

  head: {
    script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }]
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