function getUniqueClimbs(steps) {

  let fibonacci = 0;
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < steps; i++) {

    fibonacci = n1 + n0;
    n0 = n1;
    n1 = fibonacci;
  }

  return fibonacci;
}