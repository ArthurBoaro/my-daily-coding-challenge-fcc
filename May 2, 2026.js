function getDeepestBrackets(str) {

  let current = "";
  let result = "";
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char == "(" || char == "[" || char == "{") {
      count += 1;
      if (count > maxCount) {
        maxCount = count;
        current = "";
      }
      continue;
    }

    if (char == ")" || char == "]" || char == "}") {
      if (count == maxCount) {
        result = current;
      }
      count -= 1;
      continue;
    }

    if (count == maxCount) {
      current += char;
    }

  }

  return result;
}