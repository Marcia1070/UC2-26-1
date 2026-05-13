const ask = require(`readline-sync`);
let soma = 0
let numUser = null

while (numUser !== 0) {
    numUser = Number(ask.question(`Digite um numero: `))
    soma = soma + numUser
}

console.log(soma)
