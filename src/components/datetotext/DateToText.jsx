const DateToText = ({ date, locale = 'cs-CZ' }) => {
  if (!date) return null
  const d = new Date(date)
  return d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default DateToText
