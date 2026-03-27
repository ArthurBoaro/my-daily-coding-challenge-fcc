function mirror(str) {

  const newStr = str + str.split("").reverse().join("");
  
  return newStr;
}