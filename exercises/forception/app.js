// Forception

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArr = [];

function alpha(people, alaphabet) {
    for (var i = 0; i < people.length; i++) {
        newArr.push(people[i])
        for (var j = 0; j < alphabet.length; j++) {
            newArr.push(alphabet[j])
    }
}
}


console.log(alpha(people, alphabet))