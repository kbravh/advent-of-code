const fs = require('fs')

let batch = fs.readFileSync('input', 'utf-8')

let passports = batch.split('\n\n').map(passport => passport.split('\n').join(' '))

let passportRegex = /(?=.*byr:)(?=.*iyr:)(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid)(?=.*cid:)?/

let validPassports = passports.filter(passport => passportRegex.test(passport))

console.log(validPassports.length)
