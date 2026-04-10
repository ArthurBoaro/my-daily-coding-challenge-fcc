function isIntegerHypotenuse(a, b) {

  const c = ((a ** 2) + (b ** 2)) ** 0.5
  return Number.isInteger(c);
}