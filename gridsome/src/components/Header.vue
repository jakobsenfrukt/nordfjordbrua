<template>
  <header class="site-header">
    <Logo />
    <!--<nav class="site-nav">
      <g-link class="nav-link" to="/">Hjem</g-link>
      <g-link class="nav-link" to="/info/">Info</g-link>
    </nav>-->
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.site-nav {
  width: 50%;
}
.nav-link {
  margin-right: 1rem;
}
</style>
