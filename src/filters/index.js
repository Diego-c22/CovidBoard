const amountFilter = function (value) {
  if (!value) {
    return '0'
  }
  return value.toLocaleString('en')
}

const maxLegth = value => {
  if (value.length > 20) {
    return value.slice(0, 17) + '...'
  }
  return value
}

export { amountFilter, maxLegth }
