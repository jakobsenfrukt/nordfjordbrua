export default {
  name: 'doubleImage',
  type: 'object',
  title: 'Dobbelt bilde',
  fields: [
    {
      name: 'image1',
      type: 'figure',
      title: 'Bilde 1'
    },
    {
      name: 'image2',
      type: 'figure',
      title: 'Bilde 2'
    }
  ],
  preview: {
    select: {
      title: 'image1.alt',
      media: 'image1',
    },
  },
}
