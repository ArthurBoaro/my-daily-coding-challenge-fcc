function addPunctuation(sentences) {

  let arr = sentences.split("");
  const regexUpper = /^[A-Z]$/;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i - 1] === " " && regexUpper.test(arr[i])) {
      arr.splice(i - 1, 0, ".")
      i++;
    }
  }

  if(!sentences.endsWith(".")) {
    arr.push(".");
  }

  let newSentence = arr.join("");

  return newSentence;
}