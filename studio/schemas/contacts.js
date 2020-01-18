export default {
    name: 'contact',
    title: 'Company Contacts',
    type: 'object',
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
            name: 'createdby',
            title: 'Created By',
            type: 'reference',
            to: [{type: 'user'}]
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'other',
            title: 'Other',
            type: 'string'
        },
        {
            name: 'preffered',
            title: 'Preffered Contact Method',
            type: 'number'
        }

    ]
}