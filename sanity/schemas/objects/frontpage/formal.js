export default {
  name: 'formal',
  type: 'object',
  title: 'Formål',
  fields: [
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Innhold',
      of: [{
        type: 'imageAndText'
      },
      {
        type: 'quote'
      },],
      validation: Rule => Rule.unique()
    }
  ]
}
