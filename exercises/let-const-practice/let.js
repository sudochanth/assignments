// 1.
// const name = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     let name;
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// console.log(runForLoop())

// 2.

const arr = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot}));

console.log(mapVegetables(arr));