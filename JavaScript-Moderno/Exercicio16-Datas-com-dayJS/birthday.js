const dayjs = require('dayjs')
//função para obter a idade, exibir idade em anos, próximo aniversário e quantos dias faltam
function birthday(date){
  const birthday = dayjs(date)
  const today = dayjs()

  //exibir idade em anos
  const ageInYears = today.diff(birthday, 'year')
  //próximo aniversário 
  const nextBirthDay = birthday.add(ageInYears + 1, 'year')
  //quantos dias faltam para o próximo aniversário
  const daysToNextBirthday = nextBirthDay.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthDay.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias.`)
  
}

birthday('1994-05-24')