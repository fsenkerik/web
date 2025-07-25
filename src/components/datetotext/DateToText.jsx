const DateToText = ({ date }) => {
  if (!date) return null
  const d = new Date(date)
  return d.toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default DateToText
