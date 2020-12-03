const fs = require('fs')

let input = fs.readFileSync('input', 'utf-8')

let map = input.split('\n')
map = map.map(line => line.split(''))

let trees = 0
let coords = [0,0]
let width = map[0].length -1

while (coords[1] < map.length - 1) {
  console.log(`Current coords: ${coords}`)
  coords[0] += 3
  coords[1] += 1
  console.log(`New coords: ${coords}`)
  if (coords[0] > width){
    coords[0] -= width+1
    console.log(`Adjusted coords: ${coords}`)
  }
  // Log each line
  // console.log(map[coords[1]].join(''))
  if (coords[1] <= map.length - 1){
    if(map[coords[1]][coords[0]] === '#'){
      trees++
    }
    map[coords[1]][coords[0]] = 'O'
  }
}

// Log entire tree
console.log(map.map(line => line.join('')).join('\n'))
console.log(trees)