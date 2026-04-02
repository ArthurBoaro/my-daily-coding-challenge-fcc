function fixPrankNumber(arr) {

  const firstDifference = arr[1] - arr[0];
  const secondDifference = arr[2] - arr[1];
  const thirdDifference = arr[3] - arr[2];
  const difference = [firstDifference, secondDifference, thirdDifference].sort((a, b) => a - b)[1];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] - arr[i-1] != difference) {

      if (arr[i + 1] && (arr[i + 1] - arr[i] == difference)) {
        arr[i - 1] = arr[i] - difference;
      } else {
        arr[i] = arr[i - 1] + difference;
      }
      break;
    }

  }

  return arr;
}