<template>
  <button
    @click="toAnchor(anchor)"
    class="button"
    :class="{ secondary: secondary }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    anchor: String,
    secondary: Boolean,
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
.button {
  border-radius: 5rem;
  background: var(--color-orange);
  color: var(--color-white);
  outline: none;
  border: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-darkblue);
  }

  &.secondary {
    background: var(--color-lightorange);
    color: var(--color-darkblue);
  }
}
</style>
