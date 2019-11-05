<template>
  <div class="all">
    <side />
    <article class="content">
      <section id="title">
        <div class="post-info">
          <h1>もりのパーティの将来</h1>
        </div>
        <div class="bg-color"></div>
        <div class="bg"></div>
      </section>
      <section id="body">
        <div>
          <ul v-for="(blogPost, index) in wikiPosts" :key="index">
            <nuxt-link :to="`${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
            <p>{{blogPost.description}}</p>
          </ul>
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
    script: [
      { src: "https://kit.fontawesome.com/cf7cf76089.js" },
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ]
  },

  computed: {
    wikiPosts() {
      return this.$store.state.wikiPosts;
    }
  }
};
</script>