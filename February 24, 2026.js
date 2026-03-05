function countBusinessDays(start, end) {

  let count = 0;
  let incrementDate = new Date(start + "T00:00:00");
  let endDate = new Date(end + "T00:00:00"); 


  while (incrementDate <= endDate) {

    const day = incrementDate.getDay()
    if((day !== 0) && (day!==6)) {
      count++;
    }

    incrementDate.setDate(incrementDate.getDate() + 1)
  }
  
  return count;
}