<template>
  <section id="loysing" class="section loysing">
    <h1 class="section-headline">Løysing</h1>
    <div
      v-for="(row, index) in $static.frontpage.loysing.rows"
      :key="`bakgrunn-${index}`"
    >
      <div v-if="row.type === textBlock">
        <BlockContent :blocks="row._rawBody" v-if="row._rawBody" />
      </div>
      <div v-else-if="row.type === video">
        (Video kommer her)
      </div>
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
    loysing {
      intro
      rows {
        ... on SanityTextBlock {
          _type
          _rawBody
        }
        ... on SanityVideo {
          _type
        }
      }
    }
  }
}
</static-query>

<script>
import BlockContent from "~/components/BlockContent";

export default {
  components: {
    BlockContent,
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
