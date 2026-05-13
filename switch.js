function pokemonType(pokemon){
    let type = null
    switch (pokemon) {
    case 'bulbasauro':
        type = ('Planta e Veneno');
        break;
    case 'charmander':
        type = ('Fogo');
        break;
    case 'squirtle':
        type = ('Agua');
        break;
    default:
        type = 'indefinido';
}
console.log(`o tipo de pokemon eh: ${type}`)    
}
pokemonType('squirtle')



