export const state = () => ({
  blogPosts: [],
  categories: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setCategories(state, list) {
    state.categories = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/wiki/",
      false,
      /\.json$/
    );
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });

    let files_category = await require.context(
      "~/assets/content/categories/",
      false,
      /\.json$/
    );
    let categories = files_category.keys().map(key => {
      let res = files_category(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    
    await commit("setBlogPosts", blogPosts);
    await commit("setCategories", categories);
  }
};
