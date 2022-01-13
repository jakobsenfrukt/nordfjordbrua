<template>
  <section class="hero">
    <img
      :alt="$static.frontpage.mainImage.alt"
      :src="
        $urlForImage(
          $static.frontpage.mainImage,
          $static.metadata.sanityOptions
        )
          .width(1800)
          .auto('format')
          .url()
      "
      class="hero-image"
    />
    <h1 class="hero-headline">{{ $static.frontpage.headline }}</h1>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  frontpage: sanityFrontpage (id: "frontpage") {
    headline
    mainImage {
      asset {
        _id
        url
      }
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-headline {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    animation: fadeUp 1.5s ease-out;
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
