export default {
  name: 'nyheter',
  type: 'object',
  title: 'Nyheter',
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
        type: 'doubleImage'
      },]
    }
  ]
}
