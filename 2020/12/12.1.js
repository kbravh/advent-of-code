const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('\n')

let rotation = 0 // east
let position = [0,0]

for (const instruction of instructions) {
  let action = instruction.slice(0,1)
  let value = parseInt(instruction.slice(1))
  switch (action){
    case 'N':
      position[0] = position[0] + value
      break
    case 'S':
      position[0] = position[0] - value
      break
    case 'E':
      position[1] = position[1] + value
      break
    case 'W':
      position[1] = position[1] - value
      break
    case 'L':
      rotation -= value
      break
    case 'R':
      rotation += value
      break
    case 'F':
      let adjustedRotation = rotation % 360
      switch (adjustedRotation){
        case 0:
          position[1] = position[1] + value
          break
        case -90:
        case 270:
          position[0] = position[0] + value
          break
        case 180:
        case -180:
          position[1] = position[1] - value
          break
        case 90:
        case -270:
          position[0] = position[0] - value
          break
      }
      break
  }
}

console.log(`X: ${position[1]}, Y: ${position[0]}. Manhattan distance: ${Math.abs(position[0])+Math.abs(position[1])}`)