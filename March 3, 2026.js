function countPerfectCubes(a, b) {

  let total = 0;
  let root = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    root = Math.round(Math.pow(Math.abs(i), 1/3) * Math.sign(i))

    if (root ** 3 == i) {
      total++;
    }
  }

  return total;
}