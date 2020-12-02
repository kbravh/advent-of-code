const fs = require('fs')

let instructions = fs.readFileSync('input', 'utf-8').split('')

let finalFloor = instructions.reduce((floor, instruction) => instruction === ")" ? floor - 1 : floor + 1, 0)

console.log(finalFloor)