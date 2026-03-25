function computeScore(judgeScores, ...penalties) {

  const scores = [...judgeScores];
  const max = Math.max(...judgeScores);
  const min = Math.min(...judgeScores);

  scores.splice(scores.indexOf(max), 1);
  scores.splice(scores.indexOf(min), 1);

  const totalScore = scores.reduce((sum, score) => sum + score, 0) - penalties.reduce((sum, penaltie) => sum + penaltie, 0)

  return totalScore
  
}