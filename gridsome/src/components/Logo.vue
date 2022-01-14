<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.487 78">
      <title>Nordfjordbrua</title>
      <path
        id="Path_33"
        data-name="Path 33"
        d="M0,32.158C0,12.395,11.694,0,32.743,0s32.744,12.4,32.744,32.159V78H46.542V32.158c0-9.355-4.443-14.618-13.8-14.618s-13.8,5.262-13.8,14.618V78H0Z"
        transform="translate(0 0.001)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    noise: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  color: var(--color-orange);
  width: 20%;

  img {
    display: block;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    object-fit: contain;
  }

  svg {
    display: block;
    width: 2.5rem;
    fill: currentColor;
  }
}
</style>
