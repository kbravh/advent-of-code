const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('\n').map(instruction => instruction.split(' '))

let accumulator = 0
let index = 0
let completedInstructions = new Set()

while (true){
  let [action, argument] = instructions[index]
  if (completedInstructions.has(index)) break
  completedInstructions.add(index)
  switch (action) {
    case `acc`:
      accumulator += parseInt(argument)
    case `nop`:
      index += 1
      break;
    case 'jmp':
      index += parseInt(argument)
    default:
      break;
  }
}

console.log(accumulator)