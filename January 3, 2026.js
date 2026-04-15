function findLeftHandedSeats(table) {

  let seats = 0;
  const topSeats = table[0];
  const bottomSeats = table[1];

  for (let i = 0; i < topSeats.length; i++) {
    if (topSeats[i] == "U" && topSeats[i+1] != "R") {
      seats += 1;
    }
  }
  for (let i = bottomSeats.length - 1; i >= 0; i--) {
    if (bottomSeats[i] == "U" && bottomSeats[i-1] != "R") {
      seats += 1;
    }
  }

  return seats;
}