function invertMatrix(matrix) {

  let newMatrix = [];
  const letters = [...new Set(matrix.flat())];

  for(let i = 0; i < matrix.length; i++) {
    let row = [];
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] == letters[0]) {
        row.push(letters[1]);
      } else {
        row.push(letters[0]);
      }
    }
    newMatrix.push(row);
  }

  return newMatrix;
}