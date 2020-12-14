const fs = require('fs')

let seatingMatrix = fs.readFileSync('input', 'utf-8').split('\n').map(row => row.split(''))

const findSeat = (direction, i, j) => {
  switch (direction){
    case 'nw':
      while(i >= 0 && j >= 0){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i--
        j--
      }
      return '.'
    case 'n':
      while(i >= 0){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i--
      }
      return '.'
    case 'ne':
      while(i >= 0 && j < seatingMatrix[0].length){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i--
        j++
      }
      return '.'
    case 'w':
      while(j >= 0){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        j--
      }
      return '.'
    case 'e':
      while(j < seatingMatrix[0].length){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        j++
      }
      return '.'
    case 'sw':
      while(i < seatingMatrix.length && j >= 0){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i++
        j--
      }
      return '.'
    case 's':
      while(i < seatingMatrix.length){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i++
      }
      return '.'
    case 'se':
      while(i < seatingMatrix.length && j < seatingMatrix[0].length){
        if(seatingMatrix[i]?.[j] === '#') return '#'
        if(seatingMatrix[i]?.[j] === 'L') return 'L'
        i++
        j++
      }
      return '.'
  }
}

let lastOccupied = 0
while(true){
  let seatsToEvacuate = []
  let seatsToOccupy = []
  for (let i = 0; i < seatingMatrix.length; i++) {
    for(let j = 0; j < seatingMatrix[i].length; j++){
      let nw = findSeat('nw', i-1, j-1)
      let n = findSeat('n', i-1, j)
      let ne = findSeat('ne', i-1, j+1)
      let w = findSeat('w', i, j-1)
      let e = findSeat('e', i, j+1)
      let sw = findSeat('sw', i+1, j-1)
      let s = findSeat('s', i+1, j)
      let se = findSeat('se', i+1, j+1)
      let seats = [nw, n, ne, w, e, sw, s, se]
      let occupied = seats.filter(seat => seat === '#').length
      if (seatingMatrix[i][j] === '#' && occupied >= 5){
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