<template>
  <div class="all">
    <side />
    <article class="content">
      <section id="title">
        <div class="post-info">
          <h1>もりのパーティの将来</h1>
          <section id="login" class="d-flex">
            <div class="link d-flex align-items-center">
              <img src="https://minotar.net/helm/389b1a68f6474dd0a42161b6c22fdebe/100.png" alt />
              <div class="text">Chocolatt</div>
            </div>
          </section>
        </div>
        <div class="bg-color"></div>
        <div class="bg"></div>
      </section>
      <section id="body">
        <div class="container">
          <div>
            <h2>日常生活</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">コマンド</th>
                  <th scope="col">実行結果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>/balance</td>
                  <td>現在の所持金を自分のチャット欄に表示します</td>
                </tr>
                <tr>
                  <td>/pay[プレイヤー名] [金額]</td>
                  <td>指定プレイヤーに指定金額を振込します</td>
                </tr>
                <tr>
                  <td>/cheque[金額]</td>
                  <td>
                    指定金額の小切手を作成します。作成した小切手を現金化するには、手に持った状態で右クリックする必要があります
                    <br />(300円を消費します)
                  </td>
                </tr>
                <tr>
                  <td>/donate[プレイヤー名] [個数]</td>
                  <td>指定プレイヤーに指定個数の、アイテム転送をリクエストします</td>
                </tr>
                <tr>
                  <td>/givepet[プレイヤー名]</td>
                  <td>指定プレイヤーに手懐けたペットを譲渡できます。コマンド入力後にペットを右クリックする必要があります</td>
                </tr>
                <tr>
                  <td>/co i</td>
                  <td>ブロックの破壊/出入の履歴を確認できるモードに切り替えます。左クリックでブロック類の破壊、右クリックでチェスト類の出入を自分のチャット欄に表示出来ます。</td>
                </tr>
              </tbody>
            </table>
          </div>
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