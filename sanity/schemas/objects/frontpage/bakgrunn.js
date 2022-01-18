export default {
  name: 'bakgrunn',
  type: 'object',
  title: 'Bakgrunn',
  fields: [
    {
      name: 'rows',
      type: 'array',
      title: 'Innhold',
      of: [{
        type: 'imageAndText'
      }],
      validation: Rule => Rule.unique()
    }
  ]
}
