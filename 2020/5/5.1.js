const fs = require('fs')

let input = fs.readFileSync('input', 'utf-8')

let boardingPasses = input.split('\n')

const findSeat = pass => {
  let row = parseInt(pass.slice(0,7).replaceAll('F', '0').replaceAll('B', '1'), 2)
  let column = parseInt(pass.slice(-3).replaceAll('L', '0').replaceAll('R', '1'), 2)

  return (row * 8) + column
}

console.log(boardingPasses.map(pass => findSeat(pass)).reduce((largest, current) => current > largest ? current : largest))