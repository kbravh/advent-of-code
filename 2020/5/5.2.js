const fs = require('fs')

let input = fs.readFileSync('input', 'utf-8')

let boardingPasses = input.split('\n')

const findSeat = pass => {
  let row = parseInt(pass.slice(0,7).replaceAll('F', '0').replaceAll('B', '1'), 2)
  let column = parseInt(pass.slice(-3).replaceAll('L', '0').replaceAll('R', '1'), 2)

  return (row * 8) + column
}

let seatIds = boardingPasses.map(pass => findSeat(pass)).sort()

let emptySeat = 0

for (let index = 0; index < seatIds.length; index++){
  if (index === 0) continue
  if (seatIds[index] - seatIds[index-1] === 2 || seatIds[index+1] - seatIds[index] === 2){
    emptySeat = seatIds[index] + 1
    break
  }
}

console.log(emptySeat)