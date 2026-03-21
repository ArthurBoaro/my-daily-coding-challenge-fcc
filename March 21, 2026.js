function decodeQr(qrCode) {

  const n = qrCode.length;
  let newMatrix = qrCode;
  let result = "";
  let rotations = 0;

  while(rotations < 4) {

    const topLeft =
      newMatrix[0][0] === "1" &&
      newMatrix[0][1] === "1" &&
      newMatrix[1][0] === "1" &&
      newMatrix[1][1] === "1";

    const topRight =
      newMatrix[0][n - 2] === "1" &&
      newMatrix[0][n - 1] === "1" &&
      newMatrix[1][n - 2] === "1" &&
      newMatrix[1][n - 1] === "1";

    const bottomLeft =
      newMatrix[n - 2][0] === "1" &&
      newMatrix[n - 2][1] === "1" &&
      newMatrix[n - 1][0] === "1" &&
      newMatrix[n - 1][1] === "1";

    if (topLeft && topRight && bottomLeft) {
      break;
    }

    newMatrix = rotate90(newMatrix);
    rotations++;

  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      const inTopLeft = i < 2 && j < 2;
      const inTopRight = i < 2 && j >= n - 2;
      const inBottomLeft = i >= n - 2 && j < 2;

      if (!inTopLeft && !inTopRight && !inBottomLeft) {
        result += newMatrix[i][j];
      }
    }
  }

  return result;
}


function rotate90(matrix) {
  const n = matrix.length;

  const arr = matrix.map(row => row.split(""));

  let rotated = Array.from({ length: n }, () => Array(n).fill(""));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = arr[i][j];
    }
  }

  return rotated.map(row => row.join(""));
}