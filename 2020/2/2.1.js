const fs = require('fs')

let passwords = fs.readFileSync('input', 'utf-8').split('\n')

const passwordCheck = passwordEntry => {
  let [rule, letter, password] = passwordEntry.split(' ')
  let [lower, higher] = rule.split('-')
  letter = letter[0]
  letterCount = 0
  for (const currentLetter of password) {
    if (currentLetter === letter){
      letterCount++
    }
  }
  return (letterCount >= lower && letterCount <= higher)
}

let validCount = passwords.filter(password => passwordCheck(password)).length

console.log(validCount)