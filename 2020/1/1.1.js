const fs = require('fs')

let numbers
try {
  numbers = fs.readFileSync("input", 'utf-8').split('\n').map(number => parseInt(number))
} catch (error) {
  console.log(error)
}

const find2020 = (numbers) => {
  for (const number of numbers) {
    for (const secondNumber of numbers) {
      if (number + secondNumber === 2020){
        return [number, secondNumber]
      }
    }
  }
}

let [number1, number2] = find2020(numbers)
console.log(number1 * number2)
