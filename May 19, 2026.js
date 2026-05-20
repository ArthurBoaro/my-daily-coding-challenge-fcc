function sleepDebt(hoursSlept, targetHours) {

  let hoursNeeded = 0;
  let sum = hoursSlept.reduce((acc, n) => acc + (n - targetHours), 0);

  if (sum > targetHours) {
    hoursNeeded = 0;
    return hoursNeeded
  }
  if (sum > 0) {
    hoursNeeded = targetHours - sum;
  } else if (sum < 0) {
    hoursNeeded = targetHours + Math.abs(sum);
  }

  return hoursNeeded;
}