export const state = () => ({
  wikiPosts: [],
  categoryPosts: []
});

export const mutations = {
  setWikiPosts(state, list) {
    state.WikiPosts = list;
  },
  setCategoryPosts(state, list) {
    state.CategoryPosts = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/wiki/",
      false,
      /\.json$/
    );
    let wikiPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setWikiPosts", wikiPosts);

    let cfiles = await require.context(
      "~/assets/content/categories/",
      false,
      /\.json$/
    );
    let categoryPosts = cfiles.keys().map(key => {
      let cres = files(key);
      cres.slug = key.slice(2, -5);
      return cres;
    });
    await commit("setCategoryPosts", categoryPosts);
  }
};
