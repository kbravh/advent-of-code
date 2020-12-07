const fs = require('fs')

let rules = fs.readFileSync('input', 'utf-8').trim().split('\n')

let bags = {}

// populate the bag rules
for (const rule of rules) {
  let [bagName, contents] = rule.slice(0, -1).replaceAll(/\sbags?/g, '').split(' contain ')
  let interiorBags = contents.split(', ').map(bag => bag.split(/\s+(.*)/).slice(0,2))
  bags[bagName] = interiorBags
}
// console.log(bags)

const findTotal = key => {
  let interiorBags = bags[key]
  return interiorBags.reduce((accumulator, bag) => {
    if (bag[0] === 'no') return accumulator
    return accumulator + parseInt(bag[0]) + parseInt(bag[0]) * findTotal(bag[1])
  }, 0)
}

console.log(findTotal('shiny gold'))