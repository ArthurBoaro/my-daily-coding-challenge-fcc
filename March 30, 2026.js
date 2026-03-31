function getDueDate(dateStr) {

  let [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(1);
  date.setMonth(date.getMonth() + 9);

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  year = date.getFullYear();
  month = String(date.getMonth() + 1).padStart(2, "0");
  day = String(date.getDate()).padStart(2, "0");


  return `${year}-${month}-${day}`;
}