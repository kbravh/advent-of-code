const fs = require('fs')

// add the power source as 0
let adapters = [0, ...fs.readFileSync('input', 'utf-8').split('\n').map(adapter => parseInt(adapter)).sort((a,b) => a-b)]

// results for memoization
let results = {}

const countPattern = list => {
  // return the memoized result if it exists
  if (results[list]) return results[list]

  let listSet = new Set(list)
  let adapter = list[0]
  let totalPaths = 0

  if (adapter === adapters[adapters.length-1]) return 1

  if (listSet.has(adapter+1)){
    totalPaths += countPattern(list.slice(list.indexOf(adapter+1)))
  }
  if(listSet.has(adapter+2)){
    totalPaths += countPattern(list.slice(list.indexOf(adapter+2)))
  }
  if(listSet.has(adapter+3)){
    totalPaths += countPattern(list.slice(list.indexOf(adapter+3)))
  }
  results[list] = totalPaths
  return totalPaths
}

console.log(countPattern(adapters))