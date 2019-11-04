export const state = () => ({
  wikiPosts: []
});

export const mutations = {
  setWikiPosts(state, list) {
    state.WikiPosts = list;
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
  }
};
