<template>
  <Layout>
    <Hero />
    <Bakgrunn />
    <Loysing />
    <Nyheter />
    <Kontakt />
  </Layout>
</template>

<script>
import Hero from "~/components/frontpage/Hero";
import Bakgrunn from "~/components/frontpage/Bakgrunn";
import Loysing from "~/components/frontpage/Loysing";
import Nyheter from "~/components/frontpage/Nyheter";
import Kontakt from "~/components/frontpage/Kontakt";

export default {
  components: {
    Hero,
    Bakgrunn,
    Loysing,
    Nyheter,
    Kontakt,
  },
  metaInfo: {
    title: "Forside",
    meta: [
      {
        name: "og:image",
        key: "og:image",
        content: "https://nordfjordbrua.no/images/og-img.jpg",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-highlight);
}
</style>
