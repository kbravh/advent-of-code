const fs = require('fs')

let rules = fs.readFileSync('input', 'utf-8').trim().split('\n')

// find rules that mention shiny gold bag in second half, add to set
// find rules that mention those new bags in second half, add to set
// continue until set doesn't change in size

let applicableRules = new Set(['shiny gold'])
let ruleSize = applicableRules.size

do {
  ruleSize = applicableRules.size
  for (const rule of rules){
    let [first, second] = rule.split(' contain')
    for (const appRule of [...applicableRules]){
      if (second.includes(appRule)){
        // console.log(`Rule ${first} - ${second} contains ${appRule}, adding ${first.replace(' bags', '')}`)
        applicableRules.add(first.replace(' bags', '')) // add the new rule without the bags
      }
    }
  }
} while (ruleSize !== applicableRules.size)
console.log(applicableRules.size-1) // remove the rule for shiny gold itself
