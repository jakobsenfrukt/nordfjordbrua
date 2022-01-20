<template>
  <section id="formal" class="section formal" :class="{ inview: isInView }">
    <h1 class="section-headline">Formål</h1>
    <p class="lead">{{ $static.frontpage.formal.intro }}</p>
    <div
      v-for="(row, index) in $static.frontpage.formal.rows"
      :key="`formal-${index}`"
      class="row"
    >
      <template v-if="row._type === 'imageAndText'">
        <div class="row-image" v-if="row.image">
          <img
            :src="
              $urlForImage(row.image, $static.metadata.sanityOptions)
                .width(1200)
                .auto('format')
                .url()
            "
            :alt="row.image.alt"
          />
        </div>
        <div class="row-text" v-if="row._rawText">
          <BlockContent :blocks="row._rawText" class="row-text-inner" />
        </div>
      </template>
      <template v-else-if="row._type === 'quote'">
        <blockquote>{{ row.text }}</blockquote>
      </template>

      <IntersectionObserver
        id="observer-formal"
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
        ... on SanityQuote {
          _type
          text
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
.formal {
  .lead {
    margin-bottom: calc(var(--spacing-sitepadding) * 4);
    max-width: 65%;
  }
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
      &-inner {
        max-width: 23rem;
      }
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
          var(--spacing-sitepadding) calc(var(--spacing-sitepadding) * 2) 0;
        &-inner {
          margin: 0 0 0 auto;
        }
      }
    }
    &:nth-of-type(1) {
      .row-image {
        img {
          left: calc(var(--spacing-sitepadding) * -2);
          width: calc(100% + (var(--spacing-sitepadding) * 2));
          right: 0;
          max-width: none;
        }
      }
    }
  }
}
blockquote {
  font-size: var(--font-size-l);
  font-weight: 300;
  font-style: italic;
  color: var(--color-blue);
  line-height: 1.3;
  max-width: 25em;
  margin: calc(var(--spacing-sitepadding) * 4) auto;
  &:before {
    content: "«";
  }
  &:after {
    content: "»";
  }
}
@media (max-width: 900px) {
  .formal {
    .lead {
      max-width: none;
      margin-bottom: calc(var(--spacing-sitepadding) * 6);
    }
    .row {
      flex-wrap: wrap;
      &-image {
        width: 100%;

        img {
          position: relative;
        }
      }
      &-text {
        width: 100%;
        padding: calc(var(--spacing-sitepadding) * 2) 0
          calc(var(--spacing-sitepadding) * 4);
      }
      &:nth-of-type(even) {
        .row-image {
          order: 1;
        }
        .row-text {
          padding: calc(var(--spacing-sitepadding) * 2) 0
            calc(var(--spacing-sitepadding) * 4);
          order: 2;
        }
      }
    }
  }
}
/* scroll animations */
.formal {
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
