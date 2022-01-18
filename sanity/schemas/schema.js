// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import document and object schemas
import general from './documents/general'
import frontpage from './documents/frontpage'
import post from './documents/post'

import body from './objects/body'
import simpleBody from './objects/simpleBody'
import figure from './objects/figure'
import figureCaptioned from './objects/figureCaptioned'
import contact from './objects/contact'
import imageAndText from './objects/imageAndText'
import quote from './objects/quote'
import video from './objects/video'
import textBlock from './objects/textBlock'
import contactPerson from './objects/contactPerson'
import doubleImage from './objects/doubleImage'

import bakgrunn from './objects/frontpage/bakgrunn'
import formal from './objects/frontpage/formal'
import loysing from './objects/frontpage/loysing'
import nyheter from './objects/frontpage/nyheter'
import kontakt from './objects/frontpage/kontakt'


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
    simpleBody,
    figure,
    figureCaptioned,
    contact,
    imageAndText,
    quote,
    video,
    textBlock,
    contactPerson,
    doubleImage,
    // front page sections
    bakgrunn,
    formal,
    loysing,
    nyheter,
    kontakt
  ]),
})
