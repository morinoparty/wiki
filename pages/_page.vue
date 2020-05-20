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
          >{{ wikiPost.category }}
        </div>
      </div>
      <div class="post-info">
        <h1>{{ wikiPost.title }}</h1>
        <p>{{ wikiPost.description }}</p>
      </div>
      <div class="bg-color"></div>
      <style v-if="wikiPost.image">
        .all article.content section#title .bg {
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
</template>

<style lang="scss">
h1,
h2,
h3,
h4 {
  a.header-anchor {
    font-size: 80%;
    color: #007907;
    transform: all 1s ease;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
.table-of-contents {
  position: relative;
  background-color: whitesmoke;
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 15px 15px;
  border-radius: 0 15px 15px 15px;
  &:before {
    position: absolute;
    top: -40px;
    left: 0;
    content: "もくじ";
    background-color: #007907;
    height: 40px;
    padding: 8px 20px;
    font-size: 0.9rem;
    border-radius: 10px 10px 0 0;
  }
  li {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0px;
    }
    ul {
      margin-top: 10px;
      padding-left: 30px;
      list-style-type: decimal;
      a {
        color: gray;
      }
      li {
        margin-bottom: 10px;
      }
    }
  }
  ul {
    &:last-of-type {
      margin-bottom: 0px;
    }
    list-style-type: none;
    padding: 0;
    a {
      color: #007907;
    }
  }
}
</style>

<script>
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
          content: "もりぱうぃき!"
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

  async asyncData({ params, payload }) {
    if (payload) return { wikiPost: payload };
    else
      return {
        wikiPost: await require(`~/assets/content/wiki/${params.page}.json`)
      };
  }
};
</script>
