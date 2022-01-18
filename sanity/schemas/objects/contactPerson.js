export default {
  name: 'contactPerson',
  type: 'object',
  title: 'Kontaktperson',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navn'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-post'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  },
}
