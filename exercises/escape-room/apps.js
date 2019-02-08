var readline = require("readline-sync");
var name = readline.question("What is your name? ");
var isAlive = true;
var hasKey = false;


console.log(`Welcome to the escape room ${name}`)

while(isAlive === true){
    var index = readline.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
    
    if(index === 0){
        console.log("Wasted")
        isAlive = false
    }

    if (index === 1){
        if(hasKey){
            console.log("no key here, check your pocket");
        } else {
            console.log("you found the key");
            hasKey = true;
        }
        
    }

    if (index === 2){
        if(hasKey === true){
            console.log("you're free");
            break;
        } else {
            console.log("it's locked. find key")
        }   
    }
}