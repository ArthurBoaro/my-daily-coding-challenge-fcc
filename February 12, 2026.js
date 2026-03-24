function largestDifference(skater1, skater2) {

  let lap = 0;
  let lap_difference = 0;
  let largest_lap_difference = 0;

  for (let i = 0; i < skater1.length; i++) {

    lap_difference = Math.abs(skater1[i] - skater2[i])

    if (lap_difference > largest_lap_difference) {
      largest_lap_difference = lap_difference
      lap = i + 1
    }
  }

  return lap;
}