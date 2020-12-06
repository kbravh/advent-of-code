const fs = require('fs')

const groups = fs.readFileSync('input', 'utf-8').split('\n\n').map(group => group.split('\n'))

const findAnswers = group => {
  let answers = new Set(group[0])
  for (const response of group.slice(1)){
    for(const letter of [...answers]){
      if (!response.includes(letter)){
        answers.delete(letter)
      }
    }
  }
  return answers.size
}
const totalAnswerCount = groups.map(group => findAnswers(group)).reduce((accumulator, currentCount) => accumulator + currentCount, 0)

console.log(totalAnswerCount)