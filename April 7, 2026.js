function palindromeLocator(str) {

  const invertedS = str.split("").reverse().join("");

  if (invertedS !== str) {
    return "none";
  }

  const middleLength = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(middleLength - 1, middleLength + 1);
  }

  return s[middleLength]
}