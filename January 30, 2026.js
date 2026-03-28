function findPawnMoves(position) {

  const letter = position.slice(0,1);
  const number = Number(position.slice(1,2));
  let possiblePositions = [];
  
  if (number == 2) {
    possiblePositions.push(letter + (number + 1), letter + (number + 2))
    return possiblePositions
  }

  possiblePositions.push(letter + (number + 1))

  return possiblePositions;
}