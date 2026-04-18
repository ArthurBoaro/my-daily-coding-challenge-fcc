function decode(message) {

  const key = "VLHCGMDLNH";
  let keyI = 0;
  let decodedMessage = "";

  for (let char of message) {
    if (char.toLowerCase() !== char.toUpperCase()) {
      let keyChar = key[keyI % key.length];
      let keyIndex = keyChar.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
      let charIndex = char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
      let newIndex = (charIndex - keyIndex - 1 + 26) % 26 + 1;
      decodedMessage += String.fromCharCode(newIndex + "A".charCodeAt(0) - 1 );
      keyI += 1;
    } else {
      decodedMessage += char;
    }
  }

  return decodedMessage;
}