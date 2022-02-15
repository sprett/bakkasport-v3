export default {
    name: 'home',
    title: 'Hjem',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Sub Tittel',
            type: 'string',
        },
        {
            name: 'about',
            title: 'Om Seksjon',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'image',
        },
        {
            name: 'author',
            title: 'Fotograf',
            type: 'reference',
            to: {type: 'author'},
          },
    ], 
}