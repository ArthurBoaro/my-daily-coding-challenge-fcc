def is_mirror_image(s1, s2):

    mirror_map = {
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
  
    mirrored_str = "";

    for i in range(len(s1) -1, -1, -1):
        if s1[i] not in mirror_map:
            return False
        mirrored_str += mirror_map[s1[i]]

    return mirrored_str == s2;