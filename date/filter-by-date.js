module.exports = (config, dates, dateFields) => {
  if (config.filterByDate === 'exact' && dates.length === 1) {
    if (dateFields.startDate && dateFields.endDate) return [`${dateFields.startDate.key}:[* TO ${dates[0]}]`, `${dateFields.endDate.key}:[${dates[0]} TO *]`]
    else if (dateFields.date) return [`${dateFields.date.key}:${dates[0]}`]
  } else if (config.filterByDate === 'interval') {
    if (dateFields.startDate && dateFields.endDate) return [`${dateFields.startDate.key}:[* TO ${dates[1]}]`, `${dateFields.endDate.key}:[${dates[0]} TO *]`]
    else if (dateFields.date) return [`${dateFields.date.key}:[${dates[0]} TO ${dates[1]}]`]
  }
  return []
}
