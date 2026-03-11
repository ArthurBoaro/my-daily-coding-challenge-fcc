function isValidHSL(hsl) {

  if (!hsl.startsWith("hsl(") || !(hsl.endsWith(")") || hsl.endsWith(";"))) {
    return false;
  }

  const content = hsl.slice(hsl.indexOf("(") + 1, hsl.lastIndexOf(")"));
  const arr = content.split(",").map(x => x.trim());

  if (parseInt(arr[0]) < 0 || parseInt(arr[0]) > 360) {
    return false;
  }

  if (!arr[1].endsWith("%") || !arr[2].endsWith("%")) {
    return false;
  }

  const numberS = parseInt(arr[1].slice(0, -1));
  const numberL = parseInt(arr[2].slice(0, -1));

  if (numberS < 0 || numberS > 100) {
    return false;
  }

  if (numberL < 0 || numberL > 100) {
    return false;
  }

  return true;
}