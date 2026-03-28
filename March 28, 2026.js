function pascalRow(n) {

  let arr = [[1]];

  for (let i = 1; i < n; i++) {
    let previousRow = arr[i - 1];
    let newRow = [1];

    for (let j = 1; j < previousRow.length; j++) {
      newRow.push(previousRow[j - 1] + previousRow[j]);
      }

      newRow.push(1);
      arr.push(newRow);
    }
    
  return arr[n-1]
}