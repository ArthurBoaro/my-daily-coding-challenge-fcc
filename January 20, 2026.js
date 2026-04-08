function toConsonantCase(str) {

  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      newStr += str[i].toLowerCase();
    } else if (str[i] == "-") {
      newStr += "_"
    } else {
      newStr += str[i].toUpperCase();
    }

  }

  return  newStr;
}