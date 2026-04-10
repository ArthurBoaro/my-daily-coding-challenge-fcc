function getNextBingoNumber(n) {

  const nextNumber = Number(n.slice(1)) + 1;
  if (nextNumber > 75) {
    return "B1";
  } else if (nextNumber > 60) {
    return "O" + nextNumber;
  } else if (nextNumber > 45) {
    return "G" + nextNumber;
  } else if (nextNumber > 30) {
    return "N" + nextNumber;
  } else if (nextNumber > 15) {
    return "I" + nextNumber;
  }

  return "B" + nextNumber;
}