function getRotation(n) {

  let rotation = 0;
  const digitCount = String(n).length;
  let newN = n;

  while(true) {

    if (newN % digitCount == 0) {
      return rotation
    }

    let newNStr = String(newN);
    newNStr = newNStr.slice(1) + newNStr[0];
    newN = Number(newNStr);
    rotation += 1;
    if (newN == n) {
      break
    }

  }

  return "none";
}