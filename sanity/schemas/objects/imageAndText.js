export default {
  name: 'imageAndText',
  type: 'object',
  title: 'Bilde og tekst',
  fields: [
    {
      name: 'image',
      type: 'figure',
      title: 'Bilde'
    },
    {
      name: 'text',
      type: 'body',
      title: 'Tekst'
    }
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
