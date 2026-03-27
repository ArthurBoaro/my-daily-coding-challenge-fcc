function getMovieNightCost(day, showtime, numberOfTickets) {

  const weekend = ["Friday", "Saturday", "Sunday"];
  const weekday = ["Monday", "Wednesday", "Thursday"];
  const [hourPart, minutePart] = showtime.split(":");
  let hour = parseInt(hourPart);
  const minute = parseInt(minutePart.slice(0, 2));
  const period = minutePart.slice(2);

  if (period === "pm" && hour !== 12) {
    hour += 12;
  }

  const totalMinutes = (hour * 60) + minute;
  let totalCost = 0;

  if (day == "Tuesday") {
    totalCost = numberOfTickets * 5;
      return `$${totalCost.toFixed(2)}`
  }
        

  if (weekend.includes(day)) {
    totalCost = numberOfTickets * 12;
  }
        

  if (weekday.includes(day)) {
    totalCost = numberOfTickets * 10;
  }
        

  if (totalMinutes <= (17 * 60)) {
    totalCost -= numberOfTickets * 2;
  }

  return `$${totalCost.toFixed(2)}`;
}
