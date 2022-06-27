import dayjs from 'dayjs'

export function formatField(item, field) {
    if (!item[field.key]) return ''
    if (field['x-labels']) return field['x-labels'][item[field.key]]
    if (field.type === 'number' || field.type === 'integer') return item[field.key].toLocaleString()
    if (field['x-refersTo'] === 'http://schema.org/Date') return dayjs(item[field.key]).format('DD/MM/YYYY')
    return item[field.key]
}