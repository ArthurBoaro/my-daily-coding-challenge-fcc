function isMirrorImage(str1, str2) {
  
  const mirrorMap = {
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "b": "d",
    "d": "b",
    "p": "q",
    "q": "p",
    "(": ")",
    ")": "(",

    "W": "W",
    "T": "T",
    "Y": "Y",
    "U": "U",
    "I": "I",
    "O": "O",
    "H": "H",
    "A": "A",
    "X": "X",
    "V": "V",
    "M": "M",
    "w": "w",
    "o": "o",
    "x": "x",
    "v": "v",
    "0": "0",
    "8": "8",
    "=": "=",
    "+": "+",
    ":": ":",
    "|": "|",
    "-": "-",
    "_": "_",
    "*": "*",
    "^": "^",
    "!": "!",
    ".": ".",
    " ": " "
  };
  
  let mirroredStr = "";

  for (let i = str1.length - 1; i >= 0; i--) {
    if (!(str1[i] in mirrorMap)) {
      return false;
    }
    mirroredStr += mirrorMap[str1[i]]
  }

  return mirroredStr == str2;
}