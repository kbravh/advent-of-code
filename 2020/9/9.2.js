const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8').split('\n').map(number => parseInt(number))

const findSumRange = (goal, array) => {
  for (let index = 0; index < input.length; index++) {
    for(let j = index; j < input.length; j++){
      let sliced = array.slice(index, j+1)
      let sum = sliced.reduce((total, current) => total + current, 0)
      if (sum === goal){
        sliced.sort((a,b) => a-b)
        return [sliced[0], sliced[sliced.length-1]]
      }
    }
  }
}

let [min, max] = findSumRange(1721308972, input)
// console.log(`Min: ${min}, Max: ${max}`)
console.log(min+max)