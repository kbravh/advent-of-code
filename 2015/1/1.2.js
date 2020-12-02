const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('')

let floor = 0

for (const [index, instruction] of instructions.entries()) {
  if (instruction === ")"){
    floor -= 1
  } else {
    floor += 1
  }
  if (floor < 0){
    console.log(index + 1)
    break
  }
}