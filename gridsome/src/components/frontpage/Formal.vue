<template>
  <section id="formal" class="section formal">
    <h1 class="section-headline">Formål</h1>
    <p class="lead">{{ $static.frontpage.formal.intro }}</p>
    <div
      v-for="(row, index) in $static.frontpage.formal.rows"
      :key="`bakgrunn-${index}`"
    >
      <div v-if="row.type === imageAndText">
        <img
          v-if="row.image"
          :src="
            $urlForImage(row.image, $static.metadata.sanityOptions)
              .width(1200)
              .auto('format')
              .url()
          "
          :alt="row.image.alt"
        />
        <BlockContent :blocks="row._rawText" v-if="row._rawText" />
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
    formal {
      intro
      rows {
        ... on SanityImageAndText {
          _type
          _rawText
          image {
            asset {
              _id
              url
            }
            alt
          }
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
