function juntarPalavras(palavras){
   
    let mensagem = "";

    for (let i = 0; i < palavras.length; i++) {
        mensagem += palavras[i];

        // adiciona espaço entre as palavras
        if (i < palavras.length - 1){
            mensagem += " ";
        }
    }

    console.log(mensagem);
}
let array = ["Oi", "sumido", "tudo", "bem?", "Saudades", "kk"];
juntarPalavras(array);

