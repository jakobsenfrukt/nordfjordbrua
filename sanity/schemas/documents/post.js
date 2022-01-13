export default {
  name: 'post',
  title: 'Artikkel',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Brødtekst',
      type: 'body',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
