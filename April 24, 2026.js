function compress(str) {

  const wordsList = {};
  let newStr = {};
  let result = [];
  let occurrence = 0;

  for (let word of str.split(" ")) {
    occurrence += 1;
    if (!Object.hasOwn(wordsList, word)) {
      wordsList[word] = occurrence;
      result.push(word);
    } else {
      result.push(String(wordsList[word]));
    }
  }

  newStr = result.join(" ");

  return newStr;
}