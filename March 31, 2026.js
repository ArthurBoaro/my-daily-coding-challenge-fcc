function alarmCheck(alarmTime, wakeTime) {

  const [hourAlarm, minuteAlarm] = alarmTime.split(":").map(Number);
  const [hourWake, minuteWake] = wakeTime.split(":").map(Number);
  const timeAlarm = (hourAlarm * 60) + minuteAlarm;
  const timeWakeUp = (hourWake * 60) + minuteWake;

  if (timeWakeUp - timeAlarm > 10) {
    return "late"
  } else if (timeWakeUp - timeAlarm >= 0) {
    return "on time"
  }
  
  return "early"
}