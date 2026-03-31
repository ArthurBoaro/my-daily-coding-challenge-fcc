function isValidIsbn10(str) {

  const string = str.replace(/-/g, "");
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "X") {
      if (i != 9) {
        return false
      } else {
        total += 10 * (i + 1);
      }
    } else {
      total += Number(string[i]) * (i + 1);
    }
  }
  return total % 11 == 0;
}