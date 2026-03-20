function getHillRating(drop, distance, type) {

  let steepness = drop / distance;

  if (type == "Downhill") {
    steepness *= 1.2;
  } else if (type == "Slalom") {
    steepness *= 0.9;
  } else {
    steepness *= 1;
  }

  if (steepness > 0.25) {
    return "Black"
  } else if (steepness > 0.1) {
    return "Blue"
  }

  return "Green";
}