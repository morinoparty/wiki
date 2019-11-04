<template>
  <aside class="side">
    <a href="https://wiki.morino.party">
      <section id="logo">
        <img src="/icon/moripawiki.svg" alt />
      </section>
    </a>

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
            <div class="text">カテゴリ</div>
          </div>
          <div class="child">
            <a href>
              <div class="link d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-american-sign-language-interpreting"></i>
                </div>
                <div class="text">カテゴリ</div>
              </div>
            </a>
          </div>
        </div>
      </a>
      <a href>
        <div class="child-open">
          <div class="link d-flex align-items-center">
            <div class="icon">
              <i class="fas fa-american-sign-language-interpreting"></i>
            </div>
            <div class="text">カテゴリ</div>
          </div>
          <div class="child">
            <a href>
              <div class="link d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-american-sign-language-interpreting"></i>
                </div>
                <div class="text">カテゴリ</div>
              </div>
            </a>
            <a href>
              <div class="link d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-american-sign-language-interpreting"></i>
                </div>
                <div class="text">カテゴリ</div>
              </div>
            </a>
            <a href>
              <div class="link d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-american-sign-language-interpreting"></i>
                </div>
                <div class="text">カテゴリ</div>
              </div>
            </a>
            <a href>
              <div class="link d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-american-sign-language-interpreting"></i>
                </div>
                <div class="text">カテゴリ</div>
              </div>
            </a>
          </div>
        </div>
      </a>
    </nav>
  </aside>
</template>