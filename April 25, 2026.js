function decompress(str) {

  let wordList = [];
  let newStr = {};
  let result = [];

  for (let word of str.split(" ")) {
    
    if (/^\d+$/.test(word)) {
      let index = Number(word) - 1;
      let found = wordList[index];
      result.push(found);
      wordList.push(found);
    } else {
      wordList.push(word);
      result.push(word)
    }
  }

  newStr = result.join(" ");

  return newStr;
}