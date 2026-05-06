function isNarcissistic(n) {

  const nStr = n.toString();
  const digits = nStr.length;
  let result = 0;

  for(let i = 0; i < digits; i++) {
    result += Number(nStr[i]) ** digits;
  }

  return result == n ? true : false;
}