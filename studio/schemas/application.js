export default {
    name: 'application',
    type: 'document',
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
            type: 'position',
        },
        {
            name: 'followups',
            type: 'reference',
            to: [{type: 'followup'}],
            title: 'Follow Ups'
        }
    ]
}