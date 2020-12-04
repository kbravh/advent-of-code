const fs = require('fs')

8let batch = fs.readFileSync('input', 'utf-8')

let passports = batch.split('\n\n').map(passport => passport.split('\n').join(' ').split(' '))
