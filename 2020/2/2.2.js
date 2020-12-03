const fs = require('fs')

let passwords = fs.readFileSync('input', 'utf-8').split('\n')

const passwordCheck = passwordEntry => {
  let [rule, letter, password] = passwordEntry.split(' ')
  let [first, second] = rule.split('-')
  letter = letter[0]
  first -= 1
  second -= 1
  if(password[first] === letter && password[second] === letter){
    return false
  }
  if(password[first] !== letter && password[second] !== letter){
    return false
  }
  if(password[first] === letter || password[second] === letter){
    return true
  }
}

let validCount = passwords.filter(password => passwordCheck(password)).length

console.log(validCount)