function canRetake(finishTime, currentTime) {

  const finishDate = new Date(finishTime);
  const currentDate = new Date(currentTime);

  const differenceTimeMS = currentDate - finishDate;
  const differenceTimeHours = (differenceTimeMS / 1000) * 60 * 60;

  return differenceTimeHours >= 48
}