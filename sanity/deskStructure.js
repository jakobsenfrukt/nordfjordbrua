import S from '@sanity/desk-tool/structure-builder'

import { MdSettings, MdHomeFilled, MdArticle } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['general', 'frontpage', 'post'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Generelt')
        .icon(MdSettings)
        .child(
          S.editor()
            .title('Generelt')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Forside')
        .icon(MdHomeFilled)
        .child(
          S.editor()
            .title('Forside')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Artikler (ikke aktiv)')
        .icon(MdArticle)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Artikler')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
