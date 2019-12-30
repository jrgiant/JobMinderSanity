export default {
    name: 'application',
    type: 'Document',
    title: 'Application',
    fields: [
        {
            name: 'applied',
            title: 'Applied On',
            type: 'date'
        },
        {
            name: 'resume',
            title: 'Applied With Resume',
            type: 'url'
        },
        {
            name: 'cover',
            title: 'Applied With Cover Letter',
            type: 'url'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'Position',
        },
        {
            name: 'followups',
            type: 'array',
            Of: ['followup'],
            title: 'Follow Ups'
        }
    ]
}