function convertWords(str) {

  const content = str.split(" ");
  const result = []

  for (let i = 0; i < content.length; i++) {
    result.push(content[i].length)
  }

  return result.join(" ");
}