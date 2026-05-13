const ask = require(`readline-sync`);

let numeros = [11, 15, 18, 14, 12, 13];
let maior = numeros[0];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }

}

console.log("O maior numero eh:", maior);