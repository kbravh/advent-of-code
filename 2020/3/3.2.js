const fs = require('fs')

let input = fs.readFileSync('input', 'utf-8')

let map = input.split('\n')
map = map.map(line => line.split(''))

let width = map[0].length -1

const checkSlope = ([slopeX, slopeY]) => {
  let trees = 0
  let coords = [0,0]
  while (coords[1] < map.length - 1) {
    coords[0] += slopeX
    coords[1] += slopeY
    if (coords[0] > width){
      coords[0] -= width+1
    }
    if (coords[1] <= map.length - 1){
      if(map[coords[1]][coords[0]] === '#'){
        trees++
      }
    }
  }
  console.log(trees)
  return trees
}

let slopes = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2]
]

console.log(slopes.reduce((treeTotal, slope) => treeTotal * checkSlope(slope), 1))