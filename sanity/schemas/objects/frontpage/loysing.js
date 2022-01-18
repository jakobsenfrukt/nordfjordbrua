export default {
  name: 'loysing',
  type: 'object',
  title: 'Løysing',
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
        type: 'textBlock'
      },
      {
        type: 'video'
      },{
        type: 'doubleImage'
      },],
      validation: Rule => Rule.unique()
    }
  ]
}
