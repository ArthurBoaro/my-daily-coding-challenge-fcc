function getLastLetter(str) {

  let lastWordCode = 0;
  let lastWord = "";

  for (let char of str) {
    if (char.toLowerCase() != char.toUpperCase()) {
      if (char.toLowerCase().charCodeAt(0) > lastWordCode) {
        lastWordCode = char.toLowerCase().charCodeAt(0);
        lastWord = char;
      }
    }
  }

  return lastWord;
}