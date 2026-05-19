function transpose(matrix) {

  const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  
  return transposed;
}