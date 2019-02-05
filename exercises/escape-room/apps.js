var readline = require("readline-sync");
var name = readline.question("What is your name? ");
var options = ["Put hand in hole", "Find the key", "Open the door"];
var index = readlineSync.keyInSelect(options, "What do you want to do?");

console.log