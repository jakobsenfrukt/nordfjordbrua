export default {
  name: 'frontpage',
  type: 'document',
  title: 'Front page',
  fields: [
    {
      name: 'posts',
      type: 'array',
      title: 'Posts',
      of: [{
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }],
      validation: Rule => Rule.unique()
    }
  ]
}
