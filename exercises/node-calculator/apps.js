var readlineSync = require("readline-sync");
var num1 = readlineSync.question(`Give me one number: `);
var num2 = readlineSync.question(`Give me another number: `);
var options = ["addition", "subtraction", "multiplication", "division"];
var index = readlineSync.keyInSelect(options, "What do you want to do with these numbers?");

function add(num1, num2){
    return (parseInt(num1) + parseInt(num2));
}
function sub(num1, num2){
    return (parseInt(num1) - parseInt(num2));
}
function mult(num1, num2){
    return (parseInt(num1) * parseInt(num2));
}
function divide(num1, num2){
    return (parseInt(num1) / parseInt(num2));
}

if (options[index] == "addition") {
    console.log(`Your total is ${add(num1, num2)}.`)
} else if (options[index] == "subtraction") {
    console.log(`Your total is ${sub(num1, num2)}.`)
} else if (options[index] == "multiplication") {
    console.log(`Your total is ${mult(num1, num2)}.`)
} else if (options[index] == "division") {
    console.log(`Your total is ${divide(num1, num2)}.`)
}
