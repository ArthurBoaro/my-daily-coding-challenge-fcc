function doMath(str) {

  let lastNumber = null;
  let number = "";
  let charCount = 0;
  let result = 0;
  let start = false;

  for (let i = 0; i < str.length; i++) {

    if (str[i] >= "0" && str[i] <= "9") {
      number += str[i];
      start = true;
    } else {

       if (number !== "") {
        const num = Number(number);

        if (lastNumber === null) {
          result = num;
        } else {
          if (charCount % 2 === 0) {
            result += num;
          } else {
            result -= num;
          }
        }

        lastNumber = num;
        number = "";
        charCount = 0;
      }

      if (start) {
        charCount += 1;
      }
    }
  }

  if (number !== "") {
    const num = Number(number);

    if (lastNumber === null) {
      result = num;
    } else {
      if (charCount % 2 === 0) {
        result += num;
      } else {
        result -= num;
      }
    }
  }

  return result;
}