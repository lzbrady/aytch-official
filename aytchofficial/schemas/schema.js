// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: 'Beats',
      name: 'beats',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Duration',
          name: 'duration',
          type: 'string',
        },
        {
          title: 'BPM',
          name: 'bpm',
          type: 'number',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Audio File',
          name: 'audio_file',
          type: 'file',
        },
      ],
    },
  ]),
})
