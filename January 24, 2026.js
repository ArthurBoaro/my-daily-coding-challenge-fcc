function getBingoLetter(n) {

  if (n >= 1 &&  n <= 15) return "B";
  else if (n <= 30) return "I";
  else if (n <= 45) return "N";
  else if (n <= 60) return "G";
  else if (n <= 75) return "O";

  return "Invalid";
}