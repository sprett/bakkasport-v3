export default {
    name: 'player',
    title: 'Spillere',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'playerImage',
        title: 'Bilde',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'game',
        title: 'Spiller kategori:',
        type: 'string',
        
      },
      {
        title: 'Link',
        name: 'href',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      }
      
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
