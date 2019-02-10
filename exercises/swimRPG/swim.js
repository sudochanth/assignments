// // Installations
// var readlineSync = require("readline-sync");

// // Game ending conditions
// var isAlive = true;
// var hasWon = false;





// // Character Creation
// // user
// function User (){
//     this.health = 50;
//     this.userNet = [];

// }
// var player1 = new User();

// var items = ["key", "boot", "emerald", "pearl", "starfish", "sword", "clam shell"];

// // enemy
// function Enemy (name, health){
//     this.name = name;
//     this.health = health;
//     // this.showEnemy = function (name){
//     //     name();
//     // }
// }

// var enemy1 = new Enemy("baby shark", 15);
// var enemy2 = new Enemy("mama shark", 20);
// var enemy3 = new Enemy("daddy shark", 25);
// //


// // Functions

// // Enemy Functions
// function enemyOne() {
//     var enemy1 = new Enemy("baby shark", 15);

//     console.log("           ,");
//     console.log("             .';");
//     console.log("         .-'` .'");
//     console.log("       ,`.-'-.`\ ");
//     console.log("      ; /     '-'");
//     console.log("      | \       ,-,");
//     console.log("      \  '-.__   )_`'._");
//     console.log("       '.     ```      ``'--._");
//     console.log("      .-' ,                   `'-.");
//     console.log("       '-'`-._           ((   o   )");
//     console.log("              `'--....(`- ,__..--'");
//     console.log("                       '-'`");
// }
// function enemyTwo() {
//     var enemy2 = new Enemy("mama shark", 25);

//     console.log(".");
//     console.log(" ``.");
//     console.log("  `.`._");
//     console.log("    `. `._");
//     console.log("      `. .`-.._");
//     console.log("        `.`-.._`-.._");
//     console.log("          `-.._`-.._`--.._                      ``.");
//     console.log("               `-.._`-.._ `--._                  \ `.");
//     console.log("                    `-._ `-._  `-.    .          |   \ ");
//     console.log("                        `-.._`-._ `-._\`.__...---'    `.__");
//     console.log("                             `._                           `--.._");
//     console.log("                                \ `-.  `--..__                   _`-._");
//     console.log("                                 | .-.  ..     ``-- ...____    .`o)   '.");
//     console.log("                                /.'   `'  `-._  /`-.._     |||| -._..-'");
//     console.log("                                              `(      \      __..-'");
//     console.log("                                                       |   /");
//     console.log("                                                       |  /");
//     console.log("                                                      / .'");
//     console.log("                                                     /.'");
// }
// function enemyThree() {
//     var enemy3 = new Enemy("daddy shark", 45);

//     console.log("                                 ,-");
//     console.log("                               ,'::|");
//     console.log("                              /::::|");
//     console.log("                            ,'::::o\                                      _..");
//     console.log("         ____........-------,..::?88b                                  ,-' /");
//     console.log(" _.--''''. . . .      .   .  .  .  ''`-._                           ,-' .;'");
//     console.log("<. - :::::o......  ...   . . .. . .  .  .''--._                  ,-'. .;'");
//     console.log(" `-._  ` `':`:`:`::||||:::::::::::::::::.:. .  ''--._ ,'|     ,-'.  .;'");
//     console.log("     '''_=--       //'doo.. ````:`:`::::::::::.:.:.:. .`-`._-'.   .;'");
//     console.log("         ''--.__     P(       \               ` ``:`:``:::: .   .;'");
//     console.log("                `\``--.:-.     `.                             .:/");
//     console.log("                  \. )    `-._   `.''   ., ..::(  ''.\''`.  `   \ ");
//     console.log("                   `P         `-._ \          `-:\          `. `:\ ");
//     console.log("                                   '                        `-._)");
// }
// // Death Function
// function youDead() {
//     var isAlive = false;
//     console.log("                      ^.                     o");
//     console.log("      ^              |  )                  o  o");
//     console.log("     ( )             {   )                 o");
//     console.log("     {  )           /     `~~~--__");
//     console.log("     {   )___----~~'              `~~-_                     _____");
//     console.log("      (                         /// a  `~._ _______________/___");
//     console.log("      / /~~~~-, ,__.    ,      ///  __,,,,)      o  ______/    | ");
//     console.log("      v        v    `~~~;   ,---~~-_`~= | |------o-'            | ");
//     console.log("                       /   /            / /");
//     console.log("                      '._.'           _/_/");
//     console.log("                                      ';| ");
//     console.log("You're fish food.");
// }
// // Fight Functions
// function randomFourth (){
//     var randomNum = Math.floor(Math.random()*4) + 1;
//     if(randomNum === 1){
//         console.log(`Oh no! You've encountered an enemy!`)
//         if (!readlineSync.keyInYN(`Do you want to fight?`)) {
//             console.log("You tuna fish! ");        
//             console.log(`You got attacked running away. You took -${randDamage()} damage. Your health is now ${player1.health}`)
//         } else {
//             var enemy = randEnemies();
//             console.log(enemy)
//             while (enemy.health > 0 && player1.health) {
//                 console.log(`You've attacked. Your damage was ${attack()}. Keep attacking!`);
//                 enemy.health -= attack();
//                 player1.health -= randDamage();
//                 console.log(`You took -${randDamage()} damage. Your health is now ${player1.health}`);
                    
//             }

//             if (player1.health <= 0) {
//                 isAlive = false;
//                 console.log(youDead());
//                 // break;
//             } else if (enemy.health <= 0) {
//                 console.log("they dead")
//                 // getRandomItem();
//                 // break;
//             }
//         }
//     } else {
//         console.log("Just keep swimming, you can see the ship!")
//     }
// }


// function randDamage() {
//     var randDam = (Math.floor(Math.random()* 10) + 1);
//     player1.health -= randDam;
//     return randDam;
//   }


// function attack()  {
//     var ranAttack = (Math.floor(Math.random()*20) + 1)
//     Enemy.hp -= ranAttack;
//     return ranAttack;
// }

//   function randEnemies() {
//     var enemies = ["enemyOne", "enemyTwo", "enemyThree"];
//     var randEnemy = enemies[Math.floor(Math.random()*enemies.length)];
//     if (randEnemy === "enemyOne") {
//       enemyOne();
//       return enemy1
//     } else if (randEnemy === "enemyTwo") {
//       enemyTwo();
//       return enemy2
//     } else {
//       enemyThree();
//       return enemy3
//     }
//   }

// function getRandomItem() {
//   var randomItem = items[Math.floor(Math.random()*items.length)];
//   userNet.push(randomItem)
//   return `You fought bravely. The enemy dropped a ${randomItem}! You have stored it in your net.`
// }




// // Intro Dialogue
// console.log(`Back story back story`);
// var name = readlineSync.question(`Hello. I've never seen you around these parts. What is your name? `)

// if (readlineSync.keyInYN(`${name}? What a great name! Have you been around these parts before?`) === true) {
//     console.log(`Oh, well you must have heard about me! I'm the famous Captain Morgan. That nasty storm killed all my sailors and I need a new crew.`);
// } else {
//     console.log(`Well let me introduce myself. I am the incredible, fantastic Captain Morgan. That nasty storm killed my whole crew. Say, you look strong...`);
// }

// // Game Loop
// if (readlineSync.keyInYN(`Would you like to continue this voyage with me ${name}? You'll get fame, fortune and everything in between!`) === true) {
//     while (isAlive && !hasWon) {
        
//         console.log(`Well come along then, ${name}! Adventure awaits.\n *story story story you fall off ship. oh no. Push 's' to swim to the nearest island*`);

//         var swim = readlineSync.keyIn('Swim? [s], Open net [n]', {limit: 's'});
        
//         while(swim === "s" && player1.health >= 25) {
//             randomFourth();
//         }

//     } 


 


// ///end of game vvv
// } else {
//     console.log(`Well, you're missing out on an adventure of a lifetime! It was nice talking to you. I've got to go find a sailor for my ship!`);
// }





var userNet = ["pearl"];

for (var i = 0; i < userNet.length; i++) {
    if (userNet[i].length === "pearl") {
        hasWon = true;
    }
}