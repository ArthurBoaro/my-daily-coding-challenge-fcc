function countLettersAndNumbers(str) {
  
  const numberRegex = /[0-9]/;
  const letterRegex = /[a-zA-Z]/;
  let number = 0;
  let letter = 0;

  for(let char of str) {
    if(numberRegex.test(char)) {
      number++;
    } else if(letterRegex.test(char)) {
      letter++;
    }
  }

  let letterWord = (letter === 1) ? "letter" : "letters";
  let numberWord = (number == 1) ? "number" : "numbers";

  return `The string has ${letter} ${letterWord} and ${number} ${numberWord}.`;
}