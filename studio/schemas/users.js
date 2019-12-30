export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'created',
            title: 'Created',
            type: 'date'
        },
        {
            name: 'application',
            title: 'Applications',
            type: 'array',
            of: [{type:'application'}]
        }

    ]
}