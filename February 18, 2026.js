function calculateStartDelays(jumpScores) {

  const highestScore = Math.max(...jumpScores);
  let result = [];
  
  for (let i = 0; i < jumpScores.length; i++) {
    result.push(Math.ceil((highestScore - jumpScores[i]) * 1.5))
  }

  return result
}