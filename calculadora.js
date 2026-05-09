const ask = require('readline-sync');

/*Usuário digita números
        ↓
Usuário escolhe opção
        ↓
Switch verifica a opção
        ↓
Função executa a conta
        ↓
Resultado aparece/*

/*2 numeros anode serem calculado
Numero de 1 a 5
Funcoes
Switch case

Qual opção?
opcao1 = Soma
opcao2 = Subtração
opcao3 = Multiplição
opcao4 = Divisão
opcao5 = Resto da divisão*/

function soma(num1, num2){
            return num1 + num2;
}       
function subtracao(num1, num2){
            return num1 - num2;
}
function multiplicacao(num1, num2){
            return num1 * num2;        
}
function divisao(num1, num2){
            return num1 / num2;
}
function restoDaDivisao(num1, num2){
            return num1 % num2; 
}

let num1 = Number(ask.question("Digite o primeiro numero: "));
let num2 = Number(ask.question("Digite o segundo numero: "));
let opcao = Number(ask.question("escolha uma opcao: 1 Soma\n2 Subtracao\n3 Multiplicacao\n4 Divisao\n5 Resto\nEscolha:"));
let resultado

    switch (opcao){
        case 1:
            resultado = (soma(num1, num2));
            break;

        case 2:
            resultado = (subtracao(num1, num2));
            break;

        case 3:
            resultado = (multiplicacao(num1, num2));
            break;
        
        case 4:
            resultado = (divisao(num1, num2));
            break;

        case 5:
            resultado = (restoDaDivisao(num1, num2))
            break

        default:
            resultado = ('opcao invalida')
            break
}
console.log(resultado)
