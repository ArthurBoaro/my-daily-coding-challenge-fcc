function separateLettersAndNumbers(str) {
  
  let lastChar = "";
  let newString = "";

  for (let char of str) {
    if (
      (/[a-zA-Z]/.test(lastChar) && /[0-9]/.test(char)) ||
      (/[0-9]/.test(lastChar) && /[a-zA-Z]/.test(char))
    ) {
      newString += "-";
    }

    newString += char;
    lastChar = char;
  }

  return newString;
}