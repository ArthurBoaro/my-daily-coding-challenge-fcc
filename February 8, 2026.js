function calculatePenaltyDistance(rounds) {

  let totalPoints = 0;

  for (let targetHit of rounds) {
    totalPoints += (5 - targetHit) * 150;
  }

  return totalPoints;
}