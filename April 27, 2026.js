function getWordScore(word) {

  let score = 0;

  for (let char of word) {
    score += char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }

  return score;
}