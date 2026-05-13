npm install readline-useSyncExternalStore
const ask = require('redline-sync')

function somar(numero1, numero2) {
    return numero1 + numero2;
}
let somaFinal = somar(5,10)
console.log(somaFinal)
//


let variavelArray = [1, 2, 3, 4, 5, 6, 9]

function exercicio4(array){
    let arrayRetorno = []
    arrayRetorno.push(array[array.length - 1])/2)
    arrayRetorno.push((array[0])/2)

    return arrayRetorno
}

console.log(exercicio4(variavelArray))
