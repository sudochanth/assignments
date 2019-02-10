// var arr = [2, 5, 100]

// 1. doubles the first array

// function doubleNumbers(arr) {
//     var num = arr.map(function(item) {
//         return item * 2;
//     })  
//     return num;
// }

// console.log(doubleNumbers([2, 5, 100]));

// 2. takes array of num and makes string

// function stringItUp(arr){
//     var str = arr.map(function(item) {
//         return item.toString();
//     })
//     return str;
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3.
// function capitalizeNames(arr) {
//     var cap = arr.map(function(name) {
//         return name.toUpperCase();
//     })
    
//     return cap;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// // 4.
// function namesOnly(arr){
//     var namesNew = arr.map(function(asdf) {
//         return asdf.name;
//     })
//     return namesNew;
// }


// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) )
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 5.

// function makeStrings(arr){
//     var canGo = arr.map(function(movie) {
//         if (movie.age >= 18) {
//             return movie.name + " can go";
//         } else {
//             return movie.name + " cannot go"
//         }
//     })

//     return canGo;
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6.

function readyToPutInTheDOM(arr){
    var header = arr.map(function(getHeader) {
        return `<h1>${getHeader.name}</h1><h2>${getHeader.age}</h2>`
    })

    return header;
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]