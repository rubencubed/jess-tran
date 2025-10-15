import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const ImageCardList: Block = {
  slug: 'imageCardList',
  labels: {
    singular: 'Image Card List',
    plural: 'Image Card Lists',
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Section Header',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Image Cards',
      labels: {
        singular: 'Image Card',
        plural: 'Image Cards',
      },
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
              HeadingFeature(),
            ],
          }),
        },
      ],
    },
  ],
}
