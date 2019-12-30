export default {
    name: 'company',
    title: 'Company',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'url',

        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'created',
            title: 'Creation Date',
            type: 'date',
        },
        {
            name: 'createdby',
            title: 'Created By',
            type: 'user',
        },
        {
            name: 'positions',
            title: 'Positions',
            type: 'array',
            Of: ['position']
        }
    ]
}