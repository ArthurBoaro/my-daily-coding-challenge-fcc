function checkEligibility(athleteWeights, sledWeight) {

  const person = athleteWeights.length;
  const totalWeight = athleteWeights.reduce((sum, n) => sum + n, 0) + sledWeight;
  
  if ((sledWeight < 162 || totalWeight > 247) && (person == 1)) {
    return "Not Eligible"
  } else if ((sledWeight < 170 || totalWeight > 390) && (person == 2)) {
    return "Not Eligible"
  } else if ((sledWeight < 210 || totalWeight > 630) && (person == 4)) {
    return "Not Eligible"
  }

  return "Eligible"
}