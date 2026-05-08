function getLongestSubstring(str) {
  
  let longestSubStr = "";

  for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j <= str.length; j++) {

      let subStr = str.slice(i, j);

      if (str.indexOf(subStr, i + 1) !== -1) {

        if (subStr.length > longestSubStr.length) {
          longestSubStr = subStr;
        }

      }
    }
  }

  return longestSubStr;
}