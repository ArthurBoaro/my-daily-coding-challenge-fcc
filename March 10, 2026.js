function insertIntoArray(arr, value, index) {

  arr.splice(index, 0, value);
  
  return arr;
}