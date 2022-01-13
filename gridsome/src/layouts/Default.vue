<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter {
  opacity: 0;
}
</style>
