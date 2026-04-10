function knightMoves(position) {

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const letter = position[0];
  let number = Number(position.slice(1));
  let possiblesPositions = 0;
  
  if ((number + 1 < 9) && letters.includes(String.fromCharCode(letter.charCodeAt(0) - 2))) {
    possiblesPositions += 1;
  }
  if ((number - 1 > 0) && letters.includes(String.fromCharCode(letter.charCodeAt(0) - 2))) {
    possiblesPositions += 1;
  }
  if ((number + 2 < 9) && letters.includes(String.fromCharCode(letter.charCodeAt(0) - 1))) {
    possiblesPositions += 1;
  }
  if ((number + 2 < 9) && letters.includes(String.fromCharCode(letter.charCodeAt(0) + 1))) {
    possiblesPositions += 1;
  }
  if ((number + 1 < 9) && letters.includes(String.fromCharCode(letter.charCodeAt(0) + 2))) {
    possiblesPositions += 1;
  }
  if ((number - 1 > 0) && letters.includes(String.fromCharCode(letter.charCodeAt(0) + 2))) {
    possiblesPositions += 1;
  }
  if ((number - 2 > 0) && letters.includes(String.fromCharCode(letter.charCodeAt(0) - 1))) {
    possiblesPositions += 1;
  }
  if ((number - 2 > 0) && letters.includes(String.fromCharCode(letter.charCodeAt(0) + 1))) {
    possiblesPositions += 1;
  }


  return possiblesPositions;
}