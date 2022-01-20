<template>
  <section id="kontakt" class="section kontakt">
    <h1 class="section-headline">Kontakt</h1>
    <p class="lead">{{ $static.frontpage.kontakt.intro }}</p>
    <ul>
      <li
        v-for="(row, index) in $static.frontpage.kontakt.rows"
        :key="`kontakt-${index}`"
      >
        <div v-if="row._type === 'contactPerson'" class="person">
          <strong class="name">{{ row.name }}</strong>
          <span class="title">{{ row.title }}</span>
          <a :href="`mailto:${row.email}`" target="_blank" class="email">{{
            row.email
          }}</a>
          <a :href="`tel:${row.phone}`" class="phone">{{ row.phone }}</a>
        </div>
      </li>
    </ul>
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
    kontakt {
      intro
      rows {
        ... on SanityContactPerson {
          _type
          name
          title
          email
          phone
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.kontakt {
  text-align: center;
  .lead {
    margin: 0.5rem auto;
    max-width: 20em;
  }
  ul {
    list-style: none;
    margin: calc(var(--spacing-sitepadding) * 2) auto 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: calc(var(--spacing-sitepadding) * 4);
  }
  li {
    line-height: 1.5;
    text-align: left;
    strong,
    span,
    a {
      display: block;
    }
  }
}
@media (max-width: 900px) {
  .kontakt {
    text-align: left;
    .lead {
      margin: 0.5rem 0;
    }
    ul {
      display: block;
      li {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
