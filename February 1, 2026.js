function digitalDetox(logs) {

  logs.sort((a, b) => new Date(a) - new Date(b));

  let loginDay = 0;
  let lastLoginDay = null;
  let lastLoginTime = null;

  for (let i = 0; i < logs.length; i++) {
  
  const currentDate = new Date(logs[i]);
  const currentDay = currentDate.getDate();


  if (lastLoginTime !== null) {
    const diffMinutes = Math.abs(currentDate - lastLoginTime) / (1000 * 60);

    if (diffMinutes < 4 * 60) {
      return false
    }
    
  }

  if (currentDay === lastLoginDay) {
    loginDay += 1;
  } else {
    loginDay = 1;
  }

  if (loginDay > 2) {
    return false
  }

  lastLoginTime = currentDate;
  lastLoginDay = currentDay;

  }

  return true;
}
