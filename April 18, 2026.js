function findSum(arr, target) {
  const n = arr.length;

  function backtrack(start, path, total) {
    if (total === target && path.length >= 2) {
      return path;
    }

    for (let i = start; i < n; i++) {
      const res = backtrack(i + 1, [...path, arr[i]], total + arr[i]);
      if (res) {
        return res;
      }
    }

    return null;
  }

  const result = backtrack(0, [], 0);
  
  return result ? result : "Sum not found";
}