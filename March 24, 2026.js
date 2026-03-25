function passingCount(scores, passingScore) {

  let studentsPassed = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= passingScore) {
      studentsPassed += 1;
    }
  }

  return studentsPassed;
}