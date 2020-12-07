const fs = require('fs')

let rules = fs.readFileSync('input', 'utf-8').split('\n')

// find rules that mention shiny gold bag in second half, add to set
// find rules that mention those new bags in second half, add to set
// continue until set doesn't change in size

let applicableRules = new Set(['shiny gold bag'])
let ruleSize = applicableRules.size

do {
  let ruleSize = applicableRules.size
  for (const rule of rules){
    let [first, second] = rule.split(' contain')
    for (const appRule of [...applicableRules]){
      if (second.includes(appRule)){
        console.log(`Rule ${first} - ${second} contains ${appRule}, adding ${first.slice(0, first.length-1)}`)
        applicableRules.add(first.slice(0, first.length-1)) // add the new rule without the s
      }
    }
  }
} while (ruleSize !== applicableRules.size)
console.log(applicableRules.size)
