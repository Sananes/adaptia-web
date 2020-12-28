import { format } from 'date-fns'

export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'clientName',
      type: 'text',
      title: 'Client name'
    },
    {
      name: 'clientRole',
      type: 'text',
      title: 'Client role',
      description: 'The clients role in the company. E.g. CEO of Apple...'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      media: 'mainImage'
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media
      }
    }
  }
}
