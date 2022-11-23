function checkSpam(str) {

  let lowCaseStr = str.toLowerCase();

  if (lowCaseStr.includes('1xbet') || lowCaseStr.includes('xxx')){
    return true;
  }

  return false

}
