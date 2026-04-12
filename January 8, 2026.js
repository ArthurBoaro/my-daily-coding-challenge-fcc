function isSorted(arr) {

  let asc = true;
  let desc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      asc = false;
    } else if (arr[i] < arr[i + 1]) {
      desc = false;
    }
  }

  if (asc) return "Ascending";
  if (desc) return "Descending";

  return "Not sorted";
}