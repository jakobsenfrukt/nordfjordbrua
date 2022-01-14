<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-contact">
        <block-content
          v-if="$static.general.contact._rawAddress"
          :blocks="$static.general.contact._rawAddress"
          class="contact-text"
        />
        <a
          v-if="$static.general.contact.email"
          :href="`mailto:${$static.general.contact.email}`"
          >{{ $static.general.contact.email }}</a
        >
        <div class="some-links">
          <a
            v-if="$static.general.contact.facebook"
            :href="$static.general.contact.facebook"
            >Facebook</a
          >
          <a
            v-if="$static.general.contact.linkedin"
            :href="$static.general.contact.linkedin"
            >Linkedin</a
          >
        </div>
      </div>
      <nav class="footer-site-nav">
        <ul>
          <li><a @click="toAnchor('#bakgrunn')">Bakgrunn</a></li>
          <li><a @click="toAnchor('#formal')">Formål</a></li>
          <li><a @click="toAnchor('#loysing')">Løysing</a></li>
          <li><a @click="toAnchor('#nyheter')">Nyheter</a></li>
          <li><a @click="toAnchor('#kontakt')">Kontakt</a></li>
        </ul>
      </nav>
    </div>
    <Totop />
  </footer>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  general: sanityGeneral(id: "general") {
    contact {
      _rawAddress
      email
      facebook
      linkedin
    }
  }
}
</static-query>

<script>
import BlockContent from "@/components/BlockContent.vue";
import Totop from "@/components/Totop.vue";

export default {
  components: {
    BlockContent,
    Totop,
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
        behavior: "smooth",
      });
      // close menu if on mobile
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss">
.site-footer {
  padding: var(--spacing-sitepadding);
  margin: var(--spacing-sitepadding);
  border-top: 0.3rem solid var(--color-orange);
  font-family: var(--font-body);
  font-size: var(--font-size-s);
  color: var(--color-darkblue);
  line-height: 1.5;

  a {
    display: block;
    text-decoration: underline;
  }

  p {
    margin-bottom: 0;
  }

  .some-links {
    margin-top: 2rem;
  }
}
.footer-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer-contact {
  margin: 0 auto 0 0;
}
.footer-site-nav {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
