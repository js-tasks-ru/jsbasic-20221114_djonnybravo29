function factorial(n) {
  if (n == 0) {
    return 1;
  } else if (n<0) {
    return undefined;
  } else if (n > 0) {
     for(let i = n; --i;) {
      n *= i;
     }
  }
  return n;
}