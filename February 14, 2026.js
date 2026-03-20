function getDifficulty(track) {

  let points = 0;
  let lastTurn = null;

  for (let turn of track) {
    
    if(turn == "L" || turn == "R") {
      if(lastTurn == "L" || lastTurn == "R") {
          if(lastTurn != turn) {
            points += 15;
          } else {
            points += 5;
          }
        } else {
          points += 5;
        }

        lastTurn = turn;

      } else {
        lastTurn = null;
      }

    }

  if (points >= 200) {
    return "Hard"
  } else if (points > 100) {
    return "Medium"
  }

  return "Easy";
}