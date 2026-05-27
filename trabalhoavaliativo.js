const ask = require('readline-sync')

function createrCharacter() {

    let warrior = {
        className: "warrior",
        health: 120,
        defense: 8,
        potions: 3,
        attack: warriorAttack
    }

    let boromir = {
        className: "boromir",
        health: 110,
        defense: 10,
        potions: 4,
        attack: boromirAttack
    }

    let balin = {
        className: "balin",
        health: 100,
        defense: 9,
        potions: 5,
        attack: balinAttack
    }

    console.log(`
    
    1- warrior                    2- boromir                      3- balin 
    health: 120                   health: 110                     health: 100
    defense: 8                    defense: 10                     defense: 9
    potions: 3                    potions: 4                      potions: 5

    `)

    let choice = Number(ask.question(`Choose your option: `))

    switch (choice) {
        case 1:
            console.clear()
            return warrior

        case 2:
            console.clear()
            return boromir

        case 3:
            console.clear()
            return balin

        default:
            console.clear()
            console.log(`Invalid option`)
            return createrCharacter()
    }
}


function generateEnemy(enemies) {
    let position = Math.floor(Math.random() * enemies.length)
    return enemies[position]
}


function warriorAttack() {

    console.log("The warrior strikes with a powerful attack!")
    // O guerreiro desfere um ataque poderoso

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}


function boromirAttack() {

    console.log("For Gondor! No enemy shall pass while I still stand!!")
    //Por Gondor! Nenhum inimigo passará enquanto eu estiver de pé!!"

    let damage = Math.floor(Math.random() * 10) + 15

    return damage
}


function balinAttack() {

    console.log("For the ancient mines of Khazad-dûm! Show the strength of the dwarves!")
    //"Pelas antigas minas de Khazad-dûm! Mostrem a força dos anões!"

    let damage = Math.floor(Math.random() * 8) + 22

    return damage
}



function defend(character) {

    character.defending = true

    console.log("Defense activated!")
}

function usePotion(character) {

    if (character.potions <= 0) {

        console.log("No potions left!")

        return
    }

    character.health += 20
    character.potions--

    console.log("Potion used! +20 HP")
}

function combatMenu() {

    console.log(`

========================
⚔️   COMBAT TURN     ⚔️
========================

1 - Attack
2 - Defend
3 - Use Potion 
      
          
        `)

    let option = Number(ask.question("Choose an option: "))

    return option
}

function startCombat(character, enemy) {

    while (character.health > 0 && enemy.health > 0) {

        let option = combatMenu()

        if (option === 1) {

            let damage = character.attack()

            enemy.health -= damage

            console.log(`You dealt ${damage} damage!`)
        }

        else if (option === 2) {

            defend(character)
        }

        else if (option === 3) {

            usePotion(character)
        }

        // verifica se o inimigo morreu
        if (enemy.health <= 0) {

            console.log(`${enemy.name} defeated!`)
            break
        }

        console.log(`${enemy.name}: ${enemy.health} HP`)
        console.log(`${character.className}: ${character.health} HP`)

        let enemyDamage = Math.floor(
            Math.random() * (enemy.maxDamage - enemy.minDamage + 1)
        ) + enemy.minDamage

        if (character.defending) {

            enemyDamage = Math.floor(enemyDamage / 2)

            character.defending = false
        }

        character.health -= enemyDamage

        console.log(`Enemy dealt ${enemyDamage} damage!`)
    }

    if (character.health > 0) {

        console.log("Khazad-dûm has been reclaimed!")

    } else {

        console.log("You were defeated in the depths of Moria...")
    }
}

function main() {
    let enemies = [

        {
            name: "sauron",
            health: 40,
            minDamage: 5,
            maxDamage: 10
        },

        {
            name: "saruman",
            health: 45,
            minDamage: 8,
            maxDamage: 15
        },

        {
            name: "balrog",
            health: 47,
            minDamage: 10,
            maxDamage: 18
        },

        {
            name: "azog",
            health: 50,
            minDamage: 12,
            maxDamage: 20
        },

        {
            name: "smaug",
            health: 55,
            minDamage: 13,
            maxDamage: 21
        }


    ]

    let character = createrCharacter()
    let enemy = generateEnemy(enemies)
    startCombat(character, enemy)

    let defeatedEnemies = 0 // Inimigos derrotados


while (character.health > 0 && defeatedEnemies < 5) {
        let enemy = generateEnemy(enemies)

        console.log(`A wild ${enemy.name} appeared HP: ${enemy.health})`);
        
        startCombat(character, enemy);

        // Se a luta acabou e você continua vivo, soma uma vitória!
        if (character.health > 0) {
            defeatedEnemies++;
            console.log(`Progress: ${defeatedEnemies}/5 enemies defeated.`);
        }
    }

    if (character.health > 0) {
        console.log("You defeated 5 enemies and won the game!");
    } else {
        console.log("GAME OVER...");
    }
}


main()