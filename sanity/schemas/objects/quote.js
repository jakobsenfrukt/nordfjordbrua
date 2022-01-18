//import React from 'react'

export default {
  name: 'quote',
  type: 'object',
  title: 'Sitat',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Sitattekst'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Sitert person',
      description: 'Valgfritt'
    },
  ],
  preview: {
    select: {
      title: 'text'
      /*title: 'title',
      icon: 'icon'*/
    },
    /*prepare({ text }) {
      return {
        title: text,
        media: <span style={{fontSize: '1.5rem'}}>💬</span>
      }
    }*/
  },
}
