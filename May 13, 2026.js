function findOffender(arr) {

  let index = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i+1]) {
      if ((i == 0) || (arr[i - 1] <= arr[i+1])) {
          index = i;
          break;
      }
      index = i + 1;
      break;
    }
    
  }
  return index;
}