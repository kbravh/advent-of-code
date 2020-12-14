const fs = require('fs')

let seatingMatrix = fs.readFileSync('input', 'utf-8').split('\n').map(row => row.split(''))

let lastOccupied = 0
while(true){
  let seatsToEvacuate = []
  let seatsToOccupy = []
  for (let i = 0; i < seatingMatrix.length; i++) {
    for(let j = 0; j < seatingMatrix[i].length; j++){
      let nw = seatingMatrix?.[i-1]?.[j-1] || 'L'
      let n = seatingMatrix?.[i-1]?.[j] || 'L'
      let ne = seatingMatrix?.[i-1]?.[j+1] || 'L'
      let w = seatingMatrix?.[i]?.[j-1] || 'L'
      let e = seatingMatrix?.[i]?.[j+1] || 'L'
      let sw = seatingMatrix?.[i+1]?.[j-1] || 'L'
      let s = seatingMatrix?.[i+1]?.[j] || 'L'
      let se = seatingMatrix?.[i+1]?.[j+1] || 'L'
      let seats = [nw, n, ne, w, e, sw, s, se]
      let occupied = seats.filter(seat => seat === '#').length
      if (seatingMatrix[i][j] === '#' && occupied >= 4){
        seatsToEvacuate.push([i,j])
      } else if (seatingMatrix[i][j] === 'L' && occupied === 0){
        seatsToOccupy.push([i,j])
      }
    }
  }
  for (const seat of seatsToEvacuate) {
    seatingMatrix[seat[0]][seat[1]] = 'L'
  }
  for (const seat of seatsToOccupy) {
    seatingMatrix[seat[0]][seat[1]] = '#'
  }
  if (seatingMatrix.reduce((totalOccupied, row) => totalOccupied + row.reduce((occupied, seat) => seat === '#' ? occupied + 1 : occupied,0),0) === lastOccupied) break
  lastOccupied = seatingMatrix.reduce((totalOccupied, row) => totalOccupied + row.reduce((occupied, seat) => seat === '#' ? occupied + 1 : occupied,0),0)
}

console.log(lastOccupied)