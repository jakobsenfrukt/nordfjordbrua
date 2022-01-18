<template>
  <section id="nyheter" class="section nyheter">
    <h1 class="section-headline">Nyheter</h1>
    <p class="lead">{{ $static.frontpage.nyheter.intro }}</p>
    <Button
      secondary
      text="Gå til Facebook"
      :link="$static.general.contact.facebook"
    />
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
    nyheter {
      intro
    }
  }
  general: sanityGeneral(id: "general") {
    contact {
      facebook
    }
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
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
