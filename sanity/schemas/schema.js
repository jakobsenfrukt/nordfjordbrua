// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import document and object schemas
import general from './documents/general'
import frontpage from './documents/frontpage'
import post from './documents/post'

import body from './objects/body'
import figure from './objects/figure'
import lead from './objects/lead'
import social from './objects/social'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    general,
    frontpage,
    post,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    body,
    figure,
    lead,
    social
  ]),
})
