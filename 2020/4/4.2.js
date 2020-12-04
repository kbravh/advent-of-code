const fs = require('fs')

let batch = fs.readFileSync('input', 'utf-8')

let passports = batch.split('\n\n').map(passport => {
  let parsedPassport = {}
  let passportArray = passport.split('\n').join(' ').split(' ')
  for (const line of passportArray) {
    let [key, value] = line.split(':')
    parsedPassport[key] = value
  }
  return parsedPassport
})

const validatePassport = (passport) => {
  if(!passport['byr'] || !passport['iyr'] || !passport['eyr'] || !passport['hgt'] || !passport['hcl'] || !passport['ecl'] || !passport['pid']){
    return false
  }
  let byr
  try {
    byr = parseInt(passport['byr'])
  } catch (error) {
    return false
  }
  if(byr < 1920 || byr > 2002) return false

  let iyr
  try {
    iyr = parseInt(passport['iyr'])
  } catch (error) {
    return false
  }
  if(iyr < 2010 || iyr > 2020) return false

  let eyr
  try {
    eyr = parseInt(passport['eyr'])
  } catch (error) {
    return false
  }
  if(eyr < 2020 || eyr > 2030) return false

  let hgt = passport['hgt']
  let unit = hgt.slice(-2)
  switch(unit){
    case "cm":
      let cmHeight = parseInt(hgt.slice(0,4))
      if(cmHeight < 150 || cmHeight > 193) return false
      break
    case "in":
      let inHeight = parseInt(hgt.slice(0,3))
      if(inHeight < 59 || inHeight > 76) return false
      break
    default:
      return false
  }

  let hcl = passport['hcl']
  if(!/^#[0-9a-f]{6}$/.test(hcl)) return false

  let ecl = passport['ecl']
  if(!/^amb|blu|brn|gry|grn|hzl|oth$/.test(ecl)) return false

  let pid = passport['pid']
  if(!/^\d{9}$/.test(pid)) return false

  return true
}

let validatedPassports = passports.filter(passport => validatePassport(passport))

console.log(validatedPassports.length)