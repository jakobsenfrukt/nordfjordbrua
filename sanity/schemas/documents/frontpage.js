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
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Hovedbilde'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
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
