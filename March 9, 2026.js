function sumArray(numbers) {

  return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}