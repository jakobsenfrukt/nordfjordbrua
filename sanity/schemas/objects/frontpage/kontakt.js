export default {
  name: 'kontakt',
  type: 'object',
  title: 'Kontakt',
  fields: [
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Kontaktpersoner',
      of: [{
        type: 'textBlock'
      },
      {
        type: 'video'
      },],
      validation: Rule => Rule.unique()
    }
  ]
}
