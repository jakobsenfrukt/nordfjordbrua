<template>
  <section id="nyheter" class="section nyheter" :class="{ inview: isInView }">
    <h1 class="section-headline">Nyheter</h1>
    <p class="lead">{{ $static.frontpage.nyheter.intro }}</p>
    <Button
      secondary
      text="Gå til Facebook"
      :link="$static.general.contact.facebook"
    />
    <div
      v-for="(row, index) in $static.frontpage.nyheter.rows"
      :key="`nyheter-${index}`"
      class="row"
    >
      <div v-if="row._type === 'doubleImage'" class="row-images">
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

      <IntersectionObserver
        id="observer-nyheter"
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
    nyheter {
      intro
      rows {
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
  general: sanityGeneral(id: "general") {
    contact {
      facebook
    }
  }
}
</static-query>

<script>
import Button from "~/components/Button";
import IntersectionObserver from "~/components/tools/IntersectionObserver";

export default {
  components: {
    Button,
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
.nyheter {
  .row {
    margin-top: 5rem;
  }
  .row-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .image1 {
      margin-right: calc(var(--spacing-sitepadding) * -1);
    }
    .image2 {
      margin-left: calc(var(--spacing-sitepadding) * -1);
      margin-top: calc(var(--spacing-sitepadding) * 2);
    }
  }
}
/* scroll animations */
.nyheter {
  .image1 {
    transform: translateX(-5%);
    opacity: 0;
    transition: all 1s linear;
  }
  .image2 {
    transform: translateX(5%);
    opacity: 0;
    transition: all 1s linear;
  }
  &.inview {
    .image1 {
      transform: translateX(0);
      opacity: 1;
    }
    .image2 {
      transform: translateX(0);
      opacity: 1;
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
