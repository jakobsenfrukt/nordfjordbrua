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
    <nav class="site-nav site-nav--mobile" :class="{ open: menuOpen }">
      <div role="button" @click="toggleMenu" class="menu-toggle">
        Meny <MenuIcon class="menu-toggle-icon" :open="menuOpen" />
      </div>
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
import MenuIcon from "~/components/graphics/icons/MenuIcon.vue";

export default {
  components: {
    Logo,
    MenuIcon,
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
@media (max-width: 900px) {
  .site-nav {
    display: none;
    &--mobile {
      display: block;
      text-align: left;

      ul {
        background: var(--color-lightorange);
        color: var(--color-darkblue);
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        padding: calc(var(--spacing-sitepadding) * 2)
          calc(var(--spacing-sitepadding) * 2)
          calc(var(--spacing-sitepadding) * 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
      }
      li {
        font-size: 2rem;
        display: block;
        padding: 1rem 0;
      }
      &.open {
        ul {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2rem;
    position: relative;
    z-index: 1000;
    cursor: pointer;
    &-icon {
      display: inline-block;
      width: 2rem;
      margin-left: 1rem;
    }
  }
}
</style>
