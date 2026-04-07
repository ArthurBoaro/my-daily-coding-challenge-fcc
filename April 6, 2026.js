function getDayOfWeek(timestamp) {

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(timestamp);

  return weekday[date.getUTCDay()];
}