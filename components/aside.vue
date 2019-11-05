<template>
  <aside class="side">
    <nuxt-link to="/">
      <section id="logo">
        <img src="/icon/moripawiki.svg" alt />
      </section>
    </nuxt-link>

    <a
      :href="'/admin/#/collections/wiki/entries/'+this.$nuxt.$route.params.page"
      style="text-decoration:none;"
      v-if="this.$nuxt.$route.params.page"
    >
      <section id="login" class="d-flex justify-content-center">
        <div class="link d-flex align-items-center">
          <div class="icon">
            <i class="fas fa-edit"></i>
          </div>
          <div class="text text-center">このページを編集する</div>
        </div>
      </section>
    </a>
    <a :href="'/admin/'" style="text-decoration:none;" v-if="!this.$nuxt.$route.params.page">
      <section id="login" class="d-flex justify-content-center">
        <div class="link d-flex align-items-center">
          <div class="icon">
            <i class="fas fa-edit"></i>
          </div>
          <div class="text text-center">投稿画面にアクセス</div>
        </div>
      </section>
    </a>

    <nav id="side">
      <a href>
        <div class="child-open">
          <div class="link d-flex align-items-center">
            <div class="icon">
              <i class="fas fa-american-sign-language-interpreting"></i>
            </div>
            <div class="text">{{this.$store.state.CategoryPosts}}</div>
          </div>
        </div>
      </a>
    </nav>
  </aside>
</template>
<script>
export default {
  computed: {
    categoryPosts() {
      return this.$store.state.CategoryPosts;
    }
  }
};
</script>