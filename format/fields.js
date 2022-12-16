import dayjs from 'dayjs'

export function formatField(item, field) {
    if (!item[field.key]) return ''
    if (field['x-labels'] && field['x-labels'][item[field.key]]) return field['x-labels'][item[field.key]]
    if (field.type === 'number' || field.type === 'integer') return item[field.key].toLocaleString('fr')
    if (field['x-refersTo'] === 'http://schema.org/Date' || field['x-refersTo'] === 'https://schema.org/startDate' || field['x-refersTo'] === 'https://schema.org/endDate') return dayjs(item[field.key]).format('DD/MM/YYYY')
    return item[field.key]
}
