<template>
  <div>
    <nuxt-link :to="'/category/' + category.slug" @click.native.prevent="childFunc">
      <div class="link d-flex align-items-center label">
        <div class="icon">
          <i :class="'fas fa-' + category.icon"></i>
        </div>
        <div class="text" style="font-weight:bold">{{ category.title }}</div>
      </div>
    </nuxt-link>
    <nuxt-link
      v-for="(content, index) in blogPosts"
      v-bind:key="index"
      :to="'/' + content.slug"
      @click.native.prevent="childFunc"
    >
      <div class="child">
        <div class="link d-flex align-items-center">
          <div class="text">{{ content.title }}</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["category"],
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts.filter(
        v => v.category == this.category.title
      );
    }
  },
  methods: {
    childFunc(foo, bar) {
      this.$emit("call-parent", foo, bar);
    }
  }
};
</script>