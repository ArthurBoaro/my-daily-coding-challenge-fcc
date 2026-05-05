function getGreeting(time) {

  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  if ((totalMinutes >= 5 * 60) && (totalMinutes < 12 * 60)) {
    return "Good morning";
  } else if ((totalMinutes >= 12 * 60) && (totalMinutes < 18 * 60)) {
    return "Good afternoon";
  } else if ((totalMinutes >= 18 * 60) && (totalMinutes < 22 * 60)) {
    return "Good evening";
  }

  return "Good night";
}