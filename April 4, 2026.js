function isValidEquation(equation) {

  const [leftSide, rightSide] = equation.split("=");
  const tokens = leftSide.match(/\d+|[+\-*/]/g);
  const rightN = Number(rightSide.trim())

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == "*" || tokens[i] == "/") {
      let prevN = Number(tokens[i - 1]);
      let nextN = Number(tokens[i + 1]);
      let parcialResult = 0;
      if (tokens[i] == "*") {
        parcialResult = prevN * nextN;
      } else {
        parcialResult = prevN / nextN;
      }

      tokens.splice(i - 1, 3, parcialResult.toString());
      i--;
    }
  }
  
  let result = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    let op = tokens[i];
    let n = Number(tokens[i + 1]);

    if (op == "+") {
        result += n;
      } else {
        result -= n;
      }
  }

  return result == rightN;
}