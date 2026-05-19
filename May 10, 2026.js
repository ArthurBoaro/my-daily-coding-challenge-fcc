function isValidIsbn13(str) {

  const pattern = /^[0-9-]+$/;

  if(!(pattern.test(str))) return false;

  const numStr = str.replaceAll("-", "");
  if(numStr.length != 13) return false;

  let result = 0;
  for (let i = 0; i < numStr.length; i++) {
    if(i % 2 == 0) {
      result += Number(numStr[i]) * 1;
    } else {
      result += Number(numStr[i]) * 3;
    }
  }

  if (result % 10 != 0) return false;

  return true;
}