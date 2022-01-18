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
      <div v-else-if="row._type === 'doubleImage'" class="row-images">
        <div class="image1">
          <img
            v-if="row.image1"
            :src="
              $urlForImage(row.image1, $static.metadata.sanityOptions)
                .width(1200)
                .auto('format')
                .url()
            "
            :alt="row.image1.alt"
          />
        </div>
        <div class="image2">
          <img
            v-if="row.image2"
            :src="
              $urlForImage(row.image2, $static.metadata.sanityOptions)
                .width(1200)
                .auto('format')
                .url()
            "
            :alt="row.image2.alt"
          />
        </div>
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
        ... on SanityDoubleImage {
          _type
          image1 {
            asset {
              _id
              url
            }
            alt
          }
          image2 {
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
    &-images {
      .image1 {
        margin-right: calc(var(--spacing-sitepadding) * -2);
      }
      .image2 {
        margin: -2rem 0 0 var(--spacing-sitepadding);
      }
    }
  }
}
.video-wrapper {
  width: calc(100% + (var(--spacing-sitepadding) * 4.2));
  margin: 0 calc(var(--spacing-sitepadding) * -2) 0
    calc(var(--spacing-sitepadding) * -2);
}
</style>
