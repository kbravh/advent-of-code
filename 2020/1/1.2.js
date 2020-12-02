const fs = require('fs')

let numbers
try {
  numbers = fs.readFileSync("input", 'utf-8').split('\n').map(number => parseInt(number))
} catch (error) {
  console.log(error)
}

const find2020 = (numbers) => {
  for (const number1 of numbers) {
    for (const number2 of numbers) {
      for (const number3 of numbers) {
        if (number1 + number2 + number3 === 2020){
          return [number1, number2, number3]
        }
      }
    }
  }
}

let addends = find2020(numbers)
console.log(addends.reduce((accumulator, number) => number * accumulator, 1))
