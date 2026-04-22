function getOddWords(str) {

  const words = str.split(" ");
  const oddWords = [];

  for (let word of words) {
    if (word.length % 2 == 1) {
      oddWords.push(word)
    }
  }

  return oddWords.join(" ");
}