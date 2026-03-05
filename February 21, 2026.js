function scoreCurling(house) {

  const distR = [];
  const distY = [];

  function getRing(i, j) {
    if (i === 2 && j === 2) {    
      return 0;
    }

    if (i >= 1 && i <= 3 && j >= 1 && j <= 3) {
      return 1;
    }

    return 2;
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

      if (house[i][j] === "R") {
        distR.push(getRing(i, j));
      }

      if (house[i][j] === "Y") {
        distY.push(getRing(i, j));
      }

    }
  }

  if (distR.length === 0 && distY.length === 0) {
    return "No points awarded";
  }

  distR.sort((a, b) => a - b);
  distY.sort((a, b) => a - b);

  const closestR = distR.length ? distR[0] : Infinity;
  const closestY = distY.length ? distY[0] : Infinity;

  if (closestR === closestY) {
    return "No points awarded";
  }

  if (closestR < closestY) {
    let points = 0;

    for (let d of distR) {
      if (d < closestY) points++;
      else break;
    }

    return `R: ${points}`;
  }

  if (closestY < closestR) {
    let points = 0;

    for (let d of distY) {
      if (d < closestR) points++;
      else break;
    }

    return `Y: ${points}`;
  }

  return "No points awarded";
}