function golfScore(par, strokes) {

  if (strokes == 1) {
    return "Hole in one!";
  } else if (par - strokes >= 2) {
    return "Eagle";
  } else if (par - strokes == 1) {
    return "Birdie";
  } else if (par == strokes) {
    return "Par";
  } else if (strokes - par == 1) {
    return "Bogey";
  }

  return "Double bogey";
}