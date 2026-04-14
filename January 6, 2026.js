function vowelCase(str) {

  const vowels = ["a", "e", "i", "o", "u"];

  const newStr = str.split("").map((char) => {
    if(vowels.includes(char.toLowerCase())) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join("");

  return newStr;
}

vowelCase("vowelcase")