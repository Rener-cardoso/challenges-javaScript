let student = prompt('nome do aluno:')
let numberOne = prompt('nota 1:')
let numberTwo = prompt('nota 2:')
let numberThree = prompt('nota 3:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
numberThree = Number(numberThree)

let media = (numberOne + numberTwo + numberThree)/3

alert('Nome: '+ student)
alert(`Sua media foi: ${media.toFixed(2)}`)

if(media > 6) {alert('Parabéns!!! Você foi aprovado!!!')} 
else {alert('Você não foi aprovado, mais ainda pode ir bem na prova de recuperação. Boa sorte!!!')}





