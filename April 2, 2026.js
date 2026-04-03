function capitalizeFibonacci(str) {

  let newStr = "";
  let fibonacciArr = [0];
  let fibonacci = 0;
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < str.length; i++) {

    fibonacci = n1 + n0;

    if (fibonacciArr.includes(i)) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }

    fibonacciArr.push(fibonacci);
    n0 = n1;
    n1 = fibonacci;
  }

  return newStr;
}