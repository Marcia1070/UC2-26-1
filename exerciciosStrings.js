// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome

let name = ask.question("Digite seu nome completo: ")
console.log(name, name.length)

// 2)
// Peça para o usuário  digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas
let frase2 = ask.question("Digite uma frase: ")
console.log(frase2.toUpperCase())
consdole.log(frase2.toTowerCase())

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

let variavel1 = "  Socorram-me! Subi no onibus em Marrocos!  "
console.log(variavel1)
conaole.log(variavel1.trim())
console.log(variavel1.lentgth,variavel1.trim(),length)

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

let frutas = ("morango melancia melao abacaxi banana")
let frutaDoUsuario = ask.question("Digite nome de uma fruta qualquer: ")
console.log("Sua fruta foi encontrada": $ {frutas.includes{frutaDoUsuario{}})
//

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

let frase5 = ask.question("Digite uma frase: ")
let palavraSubstituida = ask.question("Digite uma palavra que deseja substituir: ")
let novaPalavra = ask.question("Digite uma nova palavra substituida: ")
let fraseAlterada = frase.replaceAll("palavra substituida", "palavra nova")
console.log(fraseAlterada);
//
// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

let variavel6 = 8
let variavel7 = 10
console.log(resultado)
console.log(`A soma de ${variavel6} e ${variavel7} é igual ao ${resultado}.`);

//
// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof
let frase7 = ask.question("Digite um valor: ")
console.log(frase7)
console.log(typeof frase7);

//

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase
let palavra1 = ask.question("Digite a primeira palavra: ")
let palavra2 = ask.question("Digite a segunda palavra: ")
let palavrasJuntas = ${palavra1} ${palavra2}
console.log(palavrasJuntas, palavrasJuntas.length);



// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.
let fraseDoUsuario = ask.question("Digite uma frase: ").toUpperCase()
let letraDoUsuario = ask.question("Digite uma letra: ").toUpperCase ()
console.log(fraseDoUsuario)
console.log(fraseDoUsuario.replaceAll(letraDoUsuario, "*");
//