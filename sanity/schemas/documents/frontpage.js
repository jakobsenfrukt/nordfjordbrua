export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Hovedoverskrift'
    },
    /*{
      name: 'mainImage',
      type: 'figure',
      title: 'Hovedbilde'
    },*/
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'bakgrunn',
      type: 'bakgrunn',
      title: 'Bakgrunn'
    },
    {
      name: 'formal',
      type: 'formal',
      title: 'Formål'
    },
    {
      name: 'loysing',
      type: 'loysing',
      title: 'Løysing'
    },
    {
      name: 'nyheter',
      type: 'nyheter',
      title: 'Nyheter'
    },
    {
      name: 'kontakt',
      type: 'kontakt',
      title: 'Kontakt'
    },
    /*{
      name: 'posts',
      type: 'array',
      title: 'Artikler',
      of: [{
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }],
      validation: Rule => Rule.unique()
    }*/
  ]
}
