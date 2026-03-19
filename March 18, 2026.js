function largestNumber(str) {

  const numbers = str.split(/[,!?;:]+/).map(Number);

  return Math.max(...numbers);
}