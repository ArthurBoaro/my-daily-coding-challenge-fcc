function isFizzBuzz(arr) {

  let firstNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      firstNum = arr[i] - i;
      break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let num = firstNum + i;
    if (num % 3 == 0 && num % 5 == 0) {
      if (arr[i] != "FizzBuzz") return false;
    } else if (num % 3 == 0) {
      if (arr[i] != "Fizz") return false;
    } else if (num % 5 == 0) {
      if (arr[i] != "Buzz") return false;
    }      
  }

  return true;
}