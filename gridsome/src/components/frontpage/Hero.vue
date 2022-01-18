<template>
  <section class="hero">
    <!--<img
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
    />-->
    <div class="hero-text">
      <h1>{{ $static.frontpage.headline }}</h1>
      <p class="lead">{{ $static.frontpage.intro }}</p>
      <Button text="Kontakt oss" anchor="#kontakt" />
    </div>
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
    intro
  }
}
</static-query>

<script>
import Button from "~/components/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  color: var(--color-darkblue);
  background: var(--color-lightblue);
  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-text {
    position: relative;
    z-index: 2;
    width: 70%;
    //animation: fadeUp 1.5s ease-out;
    padding: var(--spacing-sectionpadding);
    margin-bottom: 2rem;

    h1 {
      font-size: var(--font-size-xl);
      margin-bottom: 1rem;
    }
    p {
      font-size: var(--font-size-m);
      font-weight: 500;
      margin-bottom: 1rem;
      max-width: 24em;
    }
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
