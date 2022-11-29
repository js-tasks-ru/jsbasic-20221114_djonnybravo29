function camelize(str) {
  return str.split('-')
      .map(item => (item = item.split(''), item.shift().toUpperCase() + item.join('')))
      .join('')
}
