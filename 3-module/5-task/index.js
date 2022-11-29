function getMinMax(str) {
  let numArr = str.split(' ')
                  .filter(item => isFinite(item))
                  .map(item => Number(item))
  let result = {
    min: 0,
    max: 0,
  }
  result.min = Math.min.apply(null, numArr)
  result.max = Math.max.apply(null, numArr)
  return result
}
