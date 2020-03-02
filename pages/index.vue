<template>
  <article class="content">
    <section id="title">
      <div class="category">
        <div class="text">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="folder"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-folder fa-w-16"
          >
            <path
              fill="currentColor"
              d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"
              class
            /></svg
          >リスト
        </div>
      </div>
      <div class="post-info">
        <h1>もりのパーティ公式Wiki もりぱうぃき!</h1>
        <p>
          もりぱうぃき!は、もりのパーティで暮らす、住人の皆さん向けの「情報をまとめる」サイトです。
        </p>
      </div>
      <div class="bg-color"></div>
      <div class="bg"></div>
    </section>
    <section id="list">
      <div class="container">
        <nuxt-link
          :to="'/' + content.slug"
          v-for="(content, index) in blogPosts"
          v-bind:key="index"
        >
          <article class="list">
            <div
              class="image"
              :style="'background-image: url(' + content.image + ')'"
            ></div>
            <div class="content">
              <h1>{{ content.title }}</h1>
              <p>{{ content.description }}</p>
              <div class="text">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="folder"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-folder fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"
                    class
                  />
                </svg>
                {{ content.category }}
              </div>
            </div>
          </article>
        </nuxt-link>
      </div>
    </section>
  </article>
</template>

<style lang="scss">
article.list {
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 200px 1fr;
  width: 100%;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  .image {
    width: 100%;
    background-color: #75bf79;
    background-size: cover;
  }
  .content {
    padding: 25px 20px;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
  }
  p {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: 0;
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: "もりのパーティ公式Wiki もりぱうぃき!",
      script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }],
      meta: [
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
      ]
    };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>
