function isFlat(arr) {

  return arr.every(item => !Array.isArray(item));
}