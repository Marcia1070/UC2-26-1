function compararNumeros(num1, num2) {
    if (num1 === num2) {
        return '${num1} e ${num2} sao iguais'
    } else {
        return ("Os números são diferentes");
    }
}  

let firstNumber = 5
let secondNumber = 8

console.log(compararNumeros(firstNumber, secondNumber));

function compararNumeros1(num5, num6) {
    if (num5 > num6) {
        return  `${num5} eh maior que ${num6}`
        } else if (num5 < num6) {
        return `${num5} eh menor que ${num6}`
        } else {
        return "Os dois números são iguais.";
    }
}


let num5 = 3
let num6 = 7

// Exemplos:
console.log(compararNumeros1(10, 5));  // maior
console.log(compararNumeros1(3, 7));   // menor
console.log(compararNumeros1(4, 4));   // igual

