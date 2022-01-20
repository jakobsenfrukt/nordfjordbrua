<template>
  <section id="bakgrunn" class="section bakgrunn" :class="{ inview: isInView }">
    <div
      v-for="(row, index) in $static.frontpage.bakgrunn.rows"
      :key="`bakgrunn-${index}`"
      class="row"
    >
      <template v-if="row._type === 'imageAndText'">
        <div class="row-image">
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
        </div>
        <div class="row-text">
          <h1 v-if="index === 0" class="section-headline">Bakgrunn</h1>
          <BlockContent :blocks="row._rawText" v-if="row._rawText" />
        </div>
      </template>

      <IntersectionObserver
        id="observer-bakgrunn"
        class="observer"
        @on-enter-viewport="onEnterViewport"
      ></IntersectionObserver>
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
    bakgrunn {
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
import IntersectionObserver from "~/components/tools/IntersectionObserver";

export default {
  components: {
    BlockContent,
    IntersectionObserver,
  },
  data() {
    return {
      isInView: false,
    };
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
      if (value === false) {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bakgrunn {
  padding-top: 0;
  .row {
    display: flex;
    align-items: center;
    &-image {
      align-self: stretch;
      width: 55%;
      position: relative;
      img {
        position: absolute;
        top: -3rem;
        bottom: 0;
        height: calc(100% + 3rem);
        width: 100%;
        object-fit: cover;
      }
    }
    &-text {
      width: 45%;
      padding: calc(var(--spacing-sitepadding) * 1.5) 0
        calc(var(--spacing-sitepadding) * 2.5) var(--spacing-sitepadding);
    }
    &:nth-of-type(even) {
      .row-image {
        order: 2;
        img {
          right: calc(var(--spacing-sitepadding) * -2);
          width: calc(100% + (var(--spacing-sitepadding) * 4));
          left: 0;
          max-width: none;
        }
      }
      .row-text {
        order: 1;
        padding: calc(var(--spacing-sitepadding) * 1.5)
          var(--spacing-sitepadding) var(--spacing-sitepadding) 0;
      }
    }
  }
}
@media (max-width: 900px) {
  .bakgrunn {
    .row {
      flex-wrap: wrap;
      &-image {
        width: 100%;

        img {
          position: relative;
          top: -1rem;
          height: calc(100% + 1rem);
        }
      }
      &-text {
        width: 100%;
        padding: calc(var(--spacing-sitepadding) * 2) 0
          calc(var(--spacing-sitepadding) * 3);
      }
      &:nth-of-type(even) {
        .row-image {
          order: 1;
        }
        .row-text {
          padding: calc(var(--spacing-sitepadding) * 2) 0;
          order: 2;
        }
      }
    }
  }
}

/* scroll animations */
.bakgrunn {
  .row-image {
    img {
      transform: translateX(-5%);
      opacity: 0;
      transition: all 1s linear;
    }
  }
  .row:nth-of-type(even) {
    .row-image {
      img {
        transform: translateX(5%);
      }
    }
  }
  &.inview {
    .row-image {
      img {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .row:nth-of-type(even) {
      .row-image {
        img {
          transform: translateX(0);
        }
      }
    }
  }
}
.observer {
  position: absolute;
  top: 30%;
  height: 100%;
}
@media (max-width: 900px) {
  .observer {
    top: 0;
  }
}
</style>
