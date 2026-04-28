function getNumberWords(n) {

  if (n == 0) return "zero";
  
  const uniqueNames = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const units = [
  "", "one", "two", "three", "four",
  "five", "six", "seven", "eight", "nine"
  ];

  const tens = [
  "twenty", "thirty", "forty",
  "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (n > 0 && n < 20) {
    return uniqueNames[n-1];
  }

  let numberStr = "";

  if (n > 20 && n < 100) {
    let decimal = Math.floor(n / 10);
    let unit = n % 10;
    if (unit > 0) {
      numberStr = tens[decimal-2] + "-" + units[unit]
    } else {
      numberStr = tens[decimal-2];
    }
    
  }

  return numberStr;
}