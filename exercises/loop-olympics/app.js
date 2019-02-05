// Preliminaries

// 1.
// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// 2.
// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }

// 3.
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// Bronze Medal

// 1.
// var numArray = []
// for (var i = 0; i <= 9; i++) {
//     numArray.push(i)
// }

// console.log(numArray)

// 2.
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// need help. how to push into new array with existing?
// 3.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newFruit = []

// for (var i = 0; i < fruit.length; i+= 2) {
//     newFruit.push(fruit[i])
// }
// console.log(newFruit)

// Silver Medal

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// 1.
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }

// // 2.
// var namesArray = []
// var occupationArray = []
// for (var i = 0; i <peopleArray.length; i++) {
//     namesArray.push(peopleArray[i].name)
//     occupationArray.push(peopleArray[i].occupation)

// }
// console.log(namesArray)
// console.log(occupationArray)

// 3.
// var everyOtherName = []
// var everyOtherOccupation = []
// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         everyOtherName.push(peopleArray[i].name)
//     }
//     if (i % 2 !== 0) {
//         everyOtherOccupation.push(peopleArray[i].occupation)
//     }
// }

// console.log(everyOtherName)
// console.log(everyOtherOccupation)

// Gold Medal

// 1.
// var array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// 2.
// var array = [[0, 0, 0], [1, 1, 1], [2, 2, 2]]

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//3.
// var array = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// 4.
var array = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        array[i][j] = "x";
    }
    console.log(array[i])
}
