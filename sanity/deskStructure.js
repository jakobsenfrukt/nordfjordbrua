import S from '@sanity/desk-tool/structure-builder'

import { MdSettings, MdArticle } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['general', 'frontpage', 'post'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(MdSettings)
        .child(
          S.editor()
            .title('General')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Front page')
        .child(
          S.editor()
            .title('Front page')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Posts')
        .icon(MdArticle)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
