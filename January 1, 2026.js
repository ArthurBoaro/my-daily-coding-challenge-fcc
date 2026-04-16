function resolutionStreak(days) {

  let fail = false;
  let dayFailed = 1;
  let dayStreak = 0;

  for (let arr of days) {
    if (arr[0] < 10000 || arr[1] > 120 || arr[2] < 5) {
      fail = true;
      dayFailed = dayStreak + 1;
      break;
    }

    dayStreak += 1;
  }

  if (fail) {
    return `Resolution failed on day ${dayFailed}: ${dayStreak} day streak.`
  } 

  return `Resolution on track: ${dayStreak} day streak.`;
}