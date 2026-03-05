function shiftMatrix(matrix, shift) {

  let newMatrix = [];
  let arr = [];
  let m = matrix.length;
  let n = matrix[0].length; 
  let count = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j])
    }
  }

  let l = arr.length;
  shift = ((shift % l) + l) % l;

  for (let i = 0; i < shift; i++){
    arr.unshift(arr.pop());
  }
    
  for(let i = 0; i < m; i++) {

    newMatrix[i] = []

    for(let j = 0; j < n; j++) {
      newMatrix[i][j] = arr[count]
      count++;
    }
  }

  return newMatrix;
}