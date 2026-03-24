function hasNoRepeats(str) {
  
  let repeatString = "";

  for (const char of str) {

    if (repeatString.includes(char)) {
      return false;
    }

    repeatString += char

    if (char == " ") {
      repeatString = "";
    }

  }

  return true;
}