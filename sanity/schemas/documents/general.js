export default {
  name: 'general',
  type: 'document',
  title: 'General',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      description: 'Beskriv nettsiden for søkemotorer og sosiale medier.'
    },
    {
      name: 'contact',
      type: 'contact',
      title: 'Kontakt'
    }
  ]
}
