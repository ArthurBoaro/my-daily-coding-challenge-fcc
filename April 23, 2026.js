function getDirection(time1, time2) {

  const [hour1, minute1] = time1.split(":").map(Number);
  const [hour2, minute2] = time2.split(":").map(Number);

  const totalMinutes1 = hour1 * 60 + minute1;
  const totalMinutes2 = hour2 * 60 + minute2;


  const forward = ((totalMinutes2 - totalMinutes1) % (24 * 60) + (24 * 60)) % (24 * 60);
  const backward = ((totalMinutes1 - totalMinutes2) % (24 * 60) + (24 * 60)) % (24 * 60);

  if (forward < backward) {
    return "forward";
  }

  if (backward < forward) {
    return "backward";
  }

  return "equal";
}