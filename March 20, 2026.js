function getShadow(time) {

  let [hour, minutes] = time.split(":").map(Number);
  let totalHour = hour + minutes / 60;

  if ((hour < 6) || (hour >= 18) || (hour == 12 && minutes == 0)) {
    return "No shadow"
  }

  let shadow_direction = "";
  let shadow_length = 0;

  if (hour - 12 < 0) {
    shadow_direction = "west"
  } else {
    shadow_direction = "east"
  }

  shadow_length = Math.abs(12 - totalHour) ** 3;

  return `${shadow_length}ft ${shadow_direction}`;
}