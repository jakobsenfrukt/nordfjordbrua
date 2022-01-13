<template>
  <section id="nyheter" class="section nyheter">
    <h1 class="section-headline">Nyheter</h1>
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
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
