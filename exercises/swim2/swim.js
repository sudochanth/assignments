// Installations
var readlineSync = require("readline-sync");

// Game ending conditions
var isAlive = true;
var hasWon = false;

// Character Creation
// User
function User() {
    this.health = 100;
    this.userNet = [];
    this.attack = Math.floor(Math.random() * 10) + 10;
}

var player1 = new User();

// Enemy Creation
function Enemy(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.count = 0;
}

var low = Math.floor(Math.random()*10) + 5;
var medium = Math.floor(Math.random()*10) + 10;
var high = Math.floor(Math.random()*10) + 15;

var enemy1 = new Enemy("baby shark", low, 15);
var enemy2 = new Enemy("mama shark", medium, 25);
var enemy3 = new Enemy("daddy shark", high, 45);

// Enemy Functions
function enemyOne() {
    // var enemy1 = new Enemy("baby shark", 15);

    console.log("           ,");
    console.log("             .';");
    console.log("         .-'` .'");
    console.log("       ,`.-'-.`\ ");
    console.log("      ; /     '-'");
    console.log("      | \       ,-,");
    console.log("      \  '-.__   )_`'._");
    console.log("       '.     ```      ``'--._");
    console.log("      .-' ,                   `'-.");
    console.log("       '-'`-._           ((   o   )");
    console.log("              `'--....(`- ,__..--'");
    console.log("                       '-'`");
}
function enemyTwo() {
    // var enemy2 = new Enemy("mama shark", 25);

    console.log(".");
    console.log(" ``.");
    console.log("  `.`._");
    console.log("    `. `._");
    console.log("      `. .`-.._");
    console.log("        `.`-.._`-.._");
    console.log("          `-.._`-.._`--.._                      ``.");
    console.log("               `-.._`-.._ `--._                  \ `.");
    console.log("                    `-._ `-._  `-.    .          |   \ ");
    console.log("                        `-.._`-._ `-._\`.__...---'    `.__");
    console.log("                             `._                           `--.._");
    console.log("                                \ `-.  `--..__                   _`-._");
    console.log("                                 | .-.  ..     ``-- ...____    .`o)   '.");
    console.log("                                /.'   `'  `-._  /`-.._     |||| -._..-'");
    console.log("                                              `(      \      __..-'");
    console.log("                                                       |   /");
    console.log("                                                       |  /");
    console.log("                                                      / .'");
    console.log("                                                     /.'");
}
function enemyThree() {
    // var enemy3 = new Enemy("daddy shark", 45);

    console.log("                                 ,-");
    console.log("                               ,'::|");
    console.log("                              /::::|");
    console.log("                            ,'::::o\                                      _..");
    console.log("         ____........-------,..::?88b                                  ,-' /");
    console.log(" _.--''''. . . .      .   .  .  .  ''`-._                           ,-' .;'");
    console.log("<. - :::::o......  ...   . . .. . .  .  .''--._                  ,-'. .;'");
    console.log(" `-._  ` `':`:`:`::||||:::::::::::::::::.:. .  ''--._ ,'|     ,-'.  .;'");
    console.log("     '''_=--       //'doo.. ````:`:`::::::::::.:.:.:. .`-`._-'.   .;'");
    console.log("         ''--.__     P(       \               ` ``:`:``:::: .   .;'");
    console.log("                `\``--.:-.     `.                             .:/");
    console.log("                  \. )    `-._   `.''   ., ..::(  ''.\''`.  `   \ ");
    console.log("                   `P         `-._ \          `-:\          `. `:\ ");
    console.log("                                   '                        `-._)");
}
// Death Function
function youDead() {
    
    console.log("                      ^.                     o");
    console.log("      ^              |  )                  o  o");
    console.log("     ( )             {   )                 o");
    console.log("     {  )           /     `~~~--__");
    console.log("     {   )___----~~'              `~~-_                     _____");
    console.log("      (                         /// a  `~._ _______________/___");
    console.log("      / /~~~~-, ,__.    ,      ///  __,,,,)      o  ______/    | ");
    console.log("      v        v    `~~~;   ,---~~-_`~= | |------o-'            | ");
    console.log("                       /   /            / /");
    console.log("                      '._.'           _/_/");
    console.log("                                      ';| ");
    console.log("You're fish food.");
    // return isAlive = false;

}

// Functions

// Swim Function
function swim() {
    var swim = Math.floor(Math.random()*4) + 1;
    if (swim === 1) {
        console.log(`You encountered an enemy!`);
        wannaFight();
    } else {
        console.log(`You see a fin circling you. Keep swimming!`);
    }
}

// Random Damage (Running away)
function randDamage() {
    var random = Math.floor(Math.random()*10) + 5;
    player1.health -= random;
    return random;
}

// Run Away 
function runAway() {
    var random = Math.floor(Math.random()*2);
    if (random === 0) {
        console.log(`You were able to run away but took -${randDamage()} damage. Your health is now ${player1.health}.`)
    } else {
        console.log(`You couldn't outswim it. You have to fight!`);
        fight();
    }
}

// wannaFight Function
function wannaFight() {
    if (!readlineSync.keyInYN(`Do you wanna fight? `)) {
        console.log(`You tuna fish!`);
        runAway();
        // console.log(`You got attacked running away. You took -${randDamage()}. Your health is now ${player1.health}.`)
    } else {
        console.log(`Let's fight!`);
        fight();
    }
}

// Give Health
function plusHealth() {
    player1.health += 20;
    return player1.health;
}

// User's Inventory
var items = ["key", "boot", "emerald", "pearl", "starfish", "clam shell", "dead fish", "goku"];

function getRandomItem() {
    var randomItem = items[Math.floor(Math.random()*items.length)];
    player1.userNet.push(randomItem);
    if (randomItem === "goku") {
        console.log(`You found Goku! Swim to shore!`)
    } else {
        console.log(`You fought bravely. The enemy dropped a ${randomItem}! You have stored it in your net.`); 
    }
  }

// Fight Function
function fight(enemy) {
    var enemy = randEnemies();
    
    
    while (enemy.health >= 0 && player1.health >= 0) {
        player1.health -= enemy.attack;
        enemy.health -= player1.attack;
        console.log(`You took some damage. Your health is now ${player1.health}.`);
        console.log(`You hit ${enemy.name} and their hp is now ${enemy.health}.`);
        if (enemy.health <= 0) {
            console.log(`You defeated it!`);
            console.log(`You've gained some energy. Your health is now ${plusHealth()}.`);
            getRandomItem();
        } else if (player1.health <= 0) {
            youDead();
            isAlive = false;
        }
    }

    // Resets count. How to reset it to this.health???
    enemy.count++;
    if (enemy.count > 0) {
        enemy.health = 25;
    }
    // test vvvv
    console.log(enemy.health);
    console.log(enemy.count);
    
}

// Random Enemies Function
function randEnemies() {
    var enemies = ["enemyOne", "enemyTwo", "enemyThree"];
    var randEnemy = enemies[Math.floor(Math.random()*enemies.length)];
    if (randEnemy === "enemyOne") {
      enemyOne();
      return enemy1;
    } else if (randEnemy === "enemyTwo") {
      enemyTwo();
      return enemy2;
    } else {
      enemyThree();
      return enemy3;
    }
}





// Intro Dialogue
console.log(`You are a weary traveler. Going from town to town looking for a job.\n You make your way to a small oceanside town. Upon entering the town you're stopped on the docks by a sketchy looking man next to a ship.\n`);
var name = readlineSync.question(`Arggh. I've never seen you around these parts. What's yerr name? `)

if (readlineSync.keyInYN(`${name}? What a great name! Have yerr been around these parts before?`) === true) {
    console.log(`Oh, well you must have heard about me! I'm the famous Captain Morgan.\n That nasty storm pulled me into this town. Killed all my sailors it did. Now I and me moneky, Goku, be looking for a new crew for my ship.`);
} else {
    console.log(`Well let me introduce myself. I am the incredible, fantastic Captain Morgan and this is my monkey, Goku. We're looking for some strong sailors for our ship.`);
}

// Game Loop
if (readlineSync.keyInYN(`Say, you look strong... Would you like to continue this voyage with me ${name}? You'll get fame, fortune and everything in between!`) === true) {
    console.log(`Well come along then, ${name}! Adventure awaits.`);
    console.log(`After a few weeks on the water you've come to realize this is your calling.\n This life was meant for you.\n One day as you're setting the rigging you hear the Captain's yell of anguish.\n Oh no!\n Goku has fallen over board.`);
    
    if (readlineSync.keyInYN(`Rescue Goku? `) === true) {
        console.log(`Here goes nothing!`)
    } else {
        console.log(`The Captain tells you he can't swim and pushes you off the ship. "Find me monkey!"`);
    }
    
    while (isAlive && !hasWon) {
        var doSomething = readlineSync.keyIn(`Keep swimming til you find Goku! Swim [s] Check Net [n] Quit Game [q]`, {limit: 'snq'})

        if (doSomething === 's') {
            swim();
        }

        if (doSomething === 'n') {
            console.log(`Net inventory: ${player1.userNet}`);
        }

        if (doSomething === 'q') {
            youDead();
        }

        for (var i = 0; i < player1.userNet.length; i++) {
            if (player1.userNet[i].includes("goku")) {
                console.log(`skfjdskfd'`)
                hasWon = true;
            }
        }
       
    }

    if (isAlive === false) {
        console.log(`Game Over`);
    }

    if (hasWon === true) {
        console.log(`After what felt like hours of swimming you have made it to land. `);
        console.log(`Captain Morgan laughs and thanks you repeatedly. "Well, I did say you'd get everything in between.`);
        console.log(`Well. Onto the next chapter.`)
    }

// vvvvv end of game vvvv    
} else {
    console.log(`Well, you're missing out on an adventure of a lifetime! It was nice talking to you. I've got to go find a sailor for my ship!`);
}