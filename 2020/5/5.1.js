const fs = require('fs')

let input = fs.readFileSync('input', 'utf-8')

let boardingPasses = input.split('\n')

const findSeat = pass => {
  let row = [...Array(128).keys()]
  let column = [...Array(8).keys()]
  for (let index = 0; index < pass.length; index++) {
    switch(pass[index]){
      case "F":
        row = row.slice(0, row.length/2)
        break
      case "B":
        row = row.slice(-row.length/2)
        break
      case "L":
        column = column.slice(0, column.length/2)
        break
      case "R":
        column = column.slice(-column.length/2)
        break
      default:
        console.log('Unexpected character')
        break
    }
  }
  return (row[0] * 8) + column[0]
}

console.log(boardingPasses.map(pass => findSeat(pass)).reduce((largest, current) => current > largest ? current : largest))