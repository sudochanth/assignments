// // create variables
// // var isAlive = true;
// // var hasWon = false;
// // var userNet = [];
// // var userHealth = 50;
// // var name = "sunny"; //<this will be readline sync variable



// // fight or swim away
// if (readlineSync.keyInYN(`Do you want to fight?`) {
//     console.log("You tuna fish!")
// } else {
//     //add fight sequence
// }

// function randDamage() {
//   var randDam = (Math.floor(Math.random()* 15) + 1);
//   return randDam;
// }

// console.log(randDamage());

// //random enemy pop up
// // function randomThird (){
// //     var randomNum = Math.floor(Math.random()*3) + 1;
// //     if(randomNum === 1){
// //       console.log(`Oh no! You've encountered an enemy!`)
// //     } else {
        
// //     }
// // }

// // //Print net function
// // function print() {
// //   return `Name: ${name}/n Health: ${userHealth}\n Net: ${userNet}`
// // }
// // print();

// // randomItem generator.
// var items = ["key", "boot", "emerald", "pearl", "starfish", "sword", "clam shell"];
// function getRandomItem() {
//   var randomItem = items[Math.floor(Math.random()*items.length)];
//   userNet.push(randomItem)
//   return `You fought bravely. The enemy dropped a ${randomItem}! You have stored it in your net.`
// }

// // getRandomItem();
// // getRandomItem();
// // console.log(`Inventory net ${userNet}`);


// // //constructor for randenemies
// function Enemy (name, hp){
//     this.name = name;
//     this.hp = hp;
//     this.showEnemy = function (name){
//         name();
//     }
// }

// // // //randomEnemy
// var enemies = ["enemyOne", "enemyTwo", "enemyThree"];
// function randEnemies() {
//   var randEnemy = enemies[Math.floor(Math.random()*enemies.length)];
//   console.log(randEnemy)
//     var currEnemy = new Enemy(randEnemy, 50)
//   if (randEnemy === "enemyOne") {
//     return `An enemy appeared. This looks easy. You can take it!\n ${currEnemy.showEnemy()}`
//   } else if (randEnemy === "enemyTwo") {
//     return `An enemy appeared. Looks kinda hard. Be careful! ${enemyTwo()}`
//   } else {
//     return `An enemy appeared. This looks tough. Might want to swim away! ${enemyThree()}`
//   }
// }
// console.log(randEnemies())



function enemyOne() {
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

function youDead() {
    var isAlive = false;
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
}

// youDead();
// enemyOne();




// function randomFourth (){
//     var randomNum = Math.floor(Math.random()*4) + 1;
//     if(randomNum === 1){
//         console.log(`Oh no! You've encountered an enemy!`)
//     } else {
//         console.log("Just keep swimming!")
//     }
// }
// randomFourth();

