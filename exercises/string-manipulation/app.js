var ask = require('readline-sync');
console.log('Hello! My name is Sunny. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');

// var responseFirstName = firstName;
console.log(`Hello ${firstName.toUpperCase()}!`);

var firstNameLength = firstName.length;
console.log(`Awesome! You have ${firstNameLength} characters in your name.`);

var born = `Tell me where you're from. `;
var location = `Also, tell me where you live.`;

var locationQuestion = ask.question(born.concat(location));

var favHobby = ask.question("Tell me about your favorite hobby. ");

// var midIndexHobby = Math.floor(favHobby.length /2);

function midIndexHobby() {
 if (favHobby.length >= 20) {
    var halfHobby = favHobby.length /2;
    return favHobby.slice(Math.floor(halfHobby));
    } else {
        return favHobby;
    };

}    

console.log(`\t${midIndexHobby(favHobby)}`);

var userIndex = ask.question(`Your response is ${favHobby.length} characters long. Choose a number from 0 - ${favHobby.length} for us to start off somewhere else. `);
function splitUserIndex(userIndex) {
    return favHobby.slice(userIndex);
}
console.log(`\t${splitUserIndex(userIndex)}`);

