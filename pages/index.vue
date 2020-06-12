<template>
  <article class="content">
    <section id="title">
      <client-only>
        <ul class="selectCategories">
          <li v-for="(category, index) in categories" :key="index">
            <input
              class="selectCategories_input"
              type="radio"
              :value="category.title"
              :id="'check_' + category.slug"
              v-model="selectedCategory"
              @click="changeCategories(category)"
            />
            <label class="selectCategories_label" :for="'check_' + category.slug">
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
              <span>{{ category.title }}</span>
            </label>
          </li>
          <li>
            <button
              class="selectCategories_label clear"
              type="button"
              @click="clearCategories()"
              id="clearCategories"
            >すべての投稿をみる</button>
          </li>
        </ul>
      </client-only>
      <div class="post-info">
        <h1>{{selectedCategory.length == 0 ? "もりぱうぃき!" : selectedCategory_data.title}}</h1>
        <p>{{selectedCategory.length == 0 ? "もりのパーティの住人向けにみんなで「情報をまとめる」サイトです" : selectedCategory_data.body}}</p>
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
          <card :content="content"></card>
        </nuxt-link>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.selectCategories {
  position: absolute;
  bottom: 10px;
  z-index: 100;

  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  @media (max-width: 991.98px) {
    overflow-x: scroll;
    justify-content: left;
  }
  @media (max-width: 730px) {
    padding-left: 15px;
  }
  &_label {
    height: 30px;
    padding: 5px 10px;
    margin-right: 10px;
    margin-bottom: 0;
    border-radius: 5px;
    white-space: nowrap;
    color: #fdfdfe;
    font-size: 0.8rem;
    background-color: #007907;
    border: none;
    cursor: pointer;
    transition: all .4s cubic-bezier(.9,.85,0,2.77);
    border: 1px solid white;
    &:focus {
      outline: none;
    }
    &.clear {
      color: #007907;
      border: 1px solid #007907;
      background-color: #def3d7;
      &::before {
        content: "×";
        padding-right: 5px;
      }
    }

    svg {
      width: 1rem;
      margin-right: 5px;
    }
  }
  .selectCategories_input {
    display: none;
    &[type="radio"]:checked+label {
    padding: 5px 15px;
      transform: rotate(-5deg) scale(1.2);
      color: #007907;
      border: 1px solid #007907;
      background-color: #fdfdfe;
      border-radius:20px
    }
  }
}
</style>

<script>
import card from "~/components/card-post";
export default {
  components: {
    card
  },
  data() {
    return {
      selectedCategory: [],
      selectedCategory_data: {}
    }
  },
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
          content: "もりぱうぃき!"
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
  methods: {
    clearCategories() {
      this.selectedCategory = [];
      this.selectedCategory_data = {};
      window.history.pushState(null, null, "/");
    },
    changeCategories(category) {
      this.selectedCategory_data = category;
      window.history.pushState(null, null, "/category/" + category.slug);
    }
  },
  computed: {
    blogPosts() {
      if(this.selectedCategory == []) {
        return this.$store.state.blogPosts;
      }
      return this.$store.state.blogPosts.filter(
        v => v.category.includes(this.selectedCategory)
      );
    },
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>
