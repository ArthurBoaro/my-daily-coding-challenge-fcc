function findDifferences(arr) {

  let resultArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    resultArr.push(arr[i + 1] - arr[i])
  }

  resultArr.push(0);

  return resultArr;
}