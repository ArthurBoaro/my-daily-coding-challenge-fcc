function getBingoRange(letter) {

  let arr = [];

  if(letter == "B") arr.push(...Array.from({ length: 15 }, (_, i) => i + 1));
  else if (letter == "I") arr.push(...Array.from({ length: 15 }, (_, i) => i + 16));
  else if (letter == "N") arr.push(...Array.from({ length: 15 }, (_, i) => i + 31));
  else if (letter == "G") arr.push(...Array.from({ length: 15 }, (_, i) => i + 46));
  else if (letter == "O") arr.push(...Array.from({ length: 15 }, (_, i) => i + 61));

  return arr;
}