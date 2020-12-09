const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8').split('\n').map(number => parseInt(number))

const checkNumber = (number, array) => {
  for (let i = 0; i < array.length; i++){
    for (let j = 1; j < array.length; j++){
      if (array[i] + array[j] === number) {
        return true
      }
    }
  }
  return false
}

for (let index = 25; index < input.length; index++) {
  let number = input[index]
  if (!checkNumber(number, input.slice(index-25, index))){
    console.log(number)
    break
  }
}