function getMinMax(str) {
  let numArr = str.split(' ')
                  .filter(item => isFinite(item))
                  .map(item => Number(item))
  return {
     min: Math.min(...numArr),
     max: Math.max(...numArr),
   }
}
