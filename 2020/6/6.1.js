const fs = require('fs')

const groups = fs.readFileSync('input', 'utf-8').split('\n\n').map(group => group.split('\n'))

const findAnswers = group => {
  let answers = new Set()
  for (const entry of group) {
    for (const letter of entry) {
      answers.add(letter)
    }
  }
  return answers.size
}

const totalAnswerCount = groups.map(group => findAnswers(group)).reduce((accumulator, currentCount) => accumulator + currentCount, 0)

console.log(totalAnswerCount)