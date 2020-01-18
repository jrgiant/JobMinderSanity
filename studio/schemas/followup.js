export default {
    name: 'followup',
    title: 'Followups',
    type: 'document',
    fields: [
        // date of follow up
        {
            name: 'date',
            title: 'Date of Follow up',
            type: 'date'
        },
        // spoke with
        {
            name: 'with',
            title: 'Spoke with or emailed',
            type: 'contact'
        },
        // via 
        {
            name: 'via',
            title: 'Via',
            type: 'number'
        },
        // notes
        {
            name: 'notes',
            title: 'Notes',
            type: 'string'
        }
    ]
}