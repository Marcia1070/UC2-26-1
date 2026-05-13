
let ensinoMedio = true
let maiorIdade = 20
let outraFaculdade = false

function podeEstudar(ensinoMedio, maiorIdade, outraFaculdade) {
    if (ensinoMedio && maiorIdade && outraFaculdade) {
        console.log("A pessoa pode estudar nesta faculdade");
    } else {
        console.log("A pessoa NÃO pode estudar nesta faculdade");
    }
}
podeEstudar(ensinoMedio, maiorIdade, outraFaculdade)

/* Exemplos:
podeEstudar(true, true, false);
podeEstudar(true, false, false);
podeEstudar(ensinoMedio, maiorIdade, outraFaculdade);*/