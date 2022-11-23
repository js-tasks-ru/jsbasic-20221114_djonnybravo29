function checkSpam(str) {

  let lowCaseStr = str.toLowerCase();

  if (lowCaseStr.includes('1xBet') || lowCaseStr.includes('XXX')){
    return true;
  }

  return false

}
