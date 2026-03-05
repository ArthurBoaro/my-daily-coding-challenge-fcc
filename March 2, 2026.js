function sumLetters(str) {

    const arr = str.toLowerCase().split("");
    let sum = 0;
    const regexLower = /^[a-z]$/;

    for (let i = 0; i < arr.length; i++) {
        if(regexLower.test(arr[i])) {
            sum += arr[i].charCodeAt(0) - 96;
        }
    }

  return sum;
}