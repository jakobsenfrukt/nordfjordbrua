<template>
  <section id="kontakt" class="section kontakt">
    <h1 class="section-headline">Kontakt</h1>
    <p class="lead">{{ $static.frontpage.kontakt.intro }}</p>
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
    kontakt {
      intro
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
