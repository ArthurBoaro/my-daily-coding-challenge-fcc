function isCircularPrime(n) {

  const str = String(n);

  for (let i = 0; i < str.length; i++) {
    let rotationN = Number(str.slice(1) + str[0]);
    for (let j = 2; j <= Math.floor(Math.sqrt(rotationN)); j++) {
      if (rotationN % j == 0) {
        return false;
      }
    }
  }

  return true;
}