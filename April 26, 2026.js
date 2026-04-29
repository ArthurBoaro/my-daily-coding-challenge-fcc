function explodeFizzbuzz(targetZCount) {
  let fizzbuzzStr = "fizzbuzz";
  let steps = 0;

  while ((fizzbuzzStr.match(/z/g) || []).length < targetZCount) {
    let newStr = "";

    for (let i = 1; i <= fizzbuzzStr.length; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        newStr += "fizzbuzz";
      } else if (i % 3 === 0) {
        newStr += "fizz";
      } else if (i % 5 === 0) {
        newStr += "buzz";
      } else {
        newStr += fizzbuzzStr[i - 1];
      }
    }

    steps += 1;
    fizzbuzzStr = newStr;
  }

  return steps;
}