let result = prompt('Adivinhe o número que estou pensando, está entre 0 e 10.')

let randomNumber = Math.round(Math.random()*10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt('Errou, tente novamente:')
    xAttempts++
}

alert('Parabéns! Você adivinhou o número em ' + xAttempts + ' tentativas')
