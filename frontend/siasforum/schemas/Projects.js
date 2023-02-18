
export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Project',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string'
        },
        {
            name: 'field',
            title: 'Field',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
        },
        {
            name: 'skills',
            title: 'Desirable Skills',
            type: 'string'
        },
        {
            name: 'fee',
            title: 'Registration Fee(Rs.)',
            type: 'string'
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
            options: {
                list: [
                  'Online', 'Offline'
                ],
              }
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
        }
    ],
  }
  