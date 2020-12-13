const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('\n')

let position = [0,0]
let waypoint = [1,10]

for (const instruction of instructions) {
  let action = instruction.slice(0,1)
  let value = parseInt(instruction.slice(1))
  switch (action){
    case 'N':
      waypoint[0] = waypoint[0] + value
      break
    case 'S':
      waypoint[0] = waypoint[0] - value
      break
    case 'E':
      waypoint[1] = waypoint[1] + value
      break
    case 'W':
      waypoint[1] = waypoint[1] - value
      break
    case 'L':
      switch (value){
        case -270:
        case 90:
          waypoint = [waypoint[1], -waypoint[0]]
          break
        case -180:
        case 180:
          waypoint = [-waypoint[0], -waypoint[1]]
          break
        case -90:
        case 270:
          waypoint = [-waypoint[1], waypoint[0]]
          break
        case 0:
        case 360:
          break
      }
      break
    case 'R':
      switch (value){
        case -270:
        case 90:
          waypoint = [-waypoint[1], waypoint[0]]
          break
        case -180:
        case 180:
          waypoint = [-waypoint[0], -waypoint[1]]
          break
        case -90:
        case 270:
          waypoint = [waypoint[1], -waypoint[0]]
          break
        case 0:
        case 360:
          break
      }
      break
    case 'F':
      position[0] += value * waypoint[0]
      position[1] += value * waypoint[1]
      break
  }
}

console.log(`X: ${position[1]}, Y: ${position[0]}. Manhattan distance: ${Math.abs(position[0])+Math.abs(position[1])}`)