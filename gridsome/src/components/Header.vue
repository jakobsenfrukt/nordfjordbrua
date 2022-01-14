<template>
  <header class="site-header">
    <Logo />
    <nav class="site-nav">
      <ul>
        <li><a @click="toAnchor('#bakgrunn')">Bakgrunn</a></li>
        <li><a @click="toAnchor('#formal')">Formål</a></li>
        <li><a @click="toAnchor('#loysing')">Løysing</a></li>
        <li><a @click="toAnchor('#nyheter')">Nyheter</a></li>
        <li><a @click="toAnchor('#kontakt')">Kontakt</a></li>
      </ul>
    </nav>
    <nav class="site-nav site-nav--mobile">
      <ul>
        <li><a @click="toAnchor('#bakgrunn')">Bakgrunn</a></li>
        <li><a @click="toAnchor('#formal')">Formål</a></li>
        <li><a @click="toAnchor('#loysing')">Løysing</a></li>
        <li><a @click="toAnchor('#nyheter')">Nyheter</a></li>
        <li><a @click="toAnchor('#kontakt')">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
        behavior: "smooth",
      });
      // close menu if on mobile
      this.menuOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sitepadding);
  position: absolute;
  z-index: 100;
  width: 100%;
  font-size: var(--font-size-s);
}
.site-nav {
  width: 90%;
  text-align: right;
  color: var(--color-darkblue);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 1.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    display: block;
    position: relative;
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -0.5em;
      width: 100%;
      height: 0.3em;
      background: var(--color-orange);
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.2s ease;
    }
    &:hover {
      text-decoration: none;
      &:after {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  &--mobile {
    display: none;
  }
}
</style>
