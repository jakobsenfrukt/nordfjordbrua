<template>
  <section id="loysing" class="section loysing">
    <div class="row">
      <h1 class="section-headline">Løysing</h1>
      <p class="lead">{{ $static.frontpage.loysing.intro }}</p>
    </div>
    <div
      v-for="(row, index) in $static.frontpage.loysing.rows"
      :key="`bakgrunn-${index}`"
      class="row"
      :class="row._type === 'video' ? 'row-video' : ''"
    >
      <div v-if="row._type === 'textBlock'">
        <BlockContent :blocks="row._rawBody" v-if="row._rawBody" />
      </div>
      <div v-else-if="row._type === 'video'" class="video-wrapper">
        <Video :vimeo="row.vimeo" />
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
          vimeo
        }
      }
    }
  }
}
</static-query>

<script>
import BlockContent from "~/components/BlockContent";
import Video from "~/components/Video";

export default {
  components: {
    BlockContent,
    Video,
  },
};
</script>

<style lang="scss" scoped>
.loysing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
  p.lead {
    max-width: 20em;
  }
  .row {
    &-video {
      grid-column: 1 / -1;
    }
  }
}
.video-wrapper {
  width: calc(100% + (var(--spacing-sitepadding) * 4.2));
  margin: 0 calc(var(--spacing-sitepadding) * -2) 0
    calc(var(--spacing-sitepadding) * -2);
}
</style>
