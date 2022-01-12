<template>
  <footer class="site-footer">
    <!--<Totop />-->
  </footer>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  general: sanityGeneral(id: "general") {
    social {
      instagram
      facebook
    }
  }
}
</static-query>

<script>
import Totop from "@/components/Totop.vue";

export default {
  components: {
    Totop,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: #eee;
}
</style>
