export default {
    name: 'position',
    title: 'Position',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'open',
            title: 'Open Date',
            type: 'date'
        },
        {
            name: 'close',
            title: 'Closed Date',
            type: 'date'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'reference',
            to: [{type:'company'}]
        }

    ]
}