function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {

  const playersScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0]

  const sortedScores = playersScores.sort((a, b) => b - a);

  const myScore = distancePoints + stylePoints + windComp + kPointBonus;

  if (myScore > sortedScores[0]) {
    return "Gold"
  } else if (myScore > sortedScores[1]) {
    return "Silver"
  } else if (myScore > sortedScores[2]) {
    return "Bronze"
  }

  return "No Medal";
}