//import React from 'react'

export default {
  name: 'textBlock',
  type: 'object',
  title: 'Tekstblokk',
  fields: [
    {
      name: 'body',
      type: 'body',
      title: 'Tekst'
    }
  ],
  preview: {
    select: {
      title: 'body'
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
