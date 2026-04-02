function isValidHex(str) {

  const regexCSSHexColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  return regexCSSHexColor.test(str);
}