<template>
  <div class="all">
    <side />
    <nuxt />
  </div>
</template>
<script>
import side from "~/components/aside.vue";

export default {
  components: {
    side
  },
  head() {
    return {
      script: [
        { src: "https://wiki.morino.party/typekit.js" },
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>