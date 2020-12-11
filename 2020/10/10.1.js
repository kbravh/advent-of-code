const fs = require('fs')

let adapters = fs.readFileSync('input', 'utf-8').split('\n').sort((a,b) => a-b)

let differences = []
let joltage = 0

for (const adapter of adapters){
  differences.push(adapter-joltage)
  joltage = adapter
}

differences.push(3) // add one for our device

let sums = differences.reduce((arr, difference) => {
  if (difference === 1) arr[0] = arr[0] + 1
  if (difference === 3) arr[1] = arr[1] + 1
  return arr
}, [0,0])

console.log(sums[0] * sums[1])