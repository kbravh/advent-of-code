const { assert } = require('console')
const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('\n').map(instruction => instruction.split(' '))

const checkInstructions = instr => {
  let accumulator = 0
  let index = 0
  let completedInstructions = new Set()

  while (index < instr.length){
    let [action, argument] = instr[index]
    if (completedInstructions.has(index)) return false
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
  return accumulator
}

for (let i = 0; i < instructions.length; i++){
  let newInstructions = JSON.parse(JSON.stringify(instructions))
  if (newInstructions[i][0] === 'acc') continue
  else if (newInstructions[i][0] === 'nop') newInstructions[i][0] = 'jmp'
  else if (newInstructions[i][0] === 'jmp') newInstructions[i][0] = 'nop'
  let result = checkInstructions(newInstructions)
  if (result) {
    console.log(result)
  }
}