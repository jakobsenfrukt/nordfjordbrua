<template>
  <footer class="site-footer">
    Kontakt, lenker, etc
    <Totop />
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
    contact {
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
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sitepadding);
}
</style>
