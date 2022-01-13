export default {
  name: 'contact',
  type: 'object',
  title: 'Contact',
  fields: [
    {
      name: 'address',
      type: 'simpleBody',
      title: 'Adresse'
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-postadresse'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook URL'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Linkedin URL'
    }
  ]
}
