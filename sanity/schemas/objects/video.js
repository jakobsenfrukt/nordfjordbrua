import React from 'react'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'vimeo',
      type: 'string',
      title: 'Vimeo-kode',
      description: 'Lim inn tallkoden du finner i URLen til Vimeo-videoen, eks. tallene 480792317 fra adressen https://vimeo.com/480792317'
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare() {
      return {
        title: 'Video',
        media: <span style={{fontSize: '1.5rem'}}>📼</span>
      }
    }
  },
}
