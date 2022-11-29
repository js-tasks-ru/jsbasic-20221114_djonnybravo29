function camelize(str) {
  return str.split('-')
      .map((item, index) => index == 0 ? item : (item = item.split(''), item.shift().toUpperCase() + item.join('')))
      .join('')
}