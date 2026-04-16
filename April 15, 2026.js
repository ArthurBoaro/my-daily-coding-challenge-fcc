function sortAndSwap(arr) {

  let newArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    if ((i % 3 == 0) && (i+1 <= newArr.length) && (i != 0)) {
      let aux = newArr[i];
      newArr[i] = newArr[i-1];
      newArr[i-1] = aux;
    }
  }

  return newArr;
}