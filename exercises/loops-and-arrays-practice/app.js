// // 1.
// // var officeItems = ["stapler", "monitor",
// // "computer", "desk", "lamp", "computer", "lamp",
// // "stapler", "computer",  "computer"]
// // var count = 1;

// // for (var i = 0; i < officeItems.length; i++) {
// //     if (officeItems[i] === "computer") {
// //         console.log(count++)
// //     }
// // }

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]
  
// //   for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
// //       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
// //           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
// //       } else {
// //           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
// //       }
// //   }

// // this code is repetitive. How do I make it simpler?
// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let him watch.")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let him in.")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let her watch.")
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let her in.")
//     }
// }

// var toggle = [[2, 5, 435, 4, 3], [1, 1, 1, 1, 3], [9, 3, 4, 2]]
// var total = 0;
// for (var i = 0; i < toggle.length; i++) {
//     if ((total + toggle[i]) % 2 === 0) {
//         console.log("off")
//     } else {
//         console.log("on")
//     }
// }

function toggleSwitch(switches) {
    var on = false;

    for (var i = 0; i < switches.length; i++) {
        for (var j = 0; j < switches[i]; j++) {
            on = !on;
        }
    }
    if (on) {
        return "The light is on"
    } else {
        return "The light is off"
    }
}

console.log(toggleSwitch([2, 5, 435, 4, 3])); // "The light is on"
console.log(toggleSwitch([1, 1, 1, 1, 3])); // "The light is on"
console.log(toggleSwitch([9, 3, 4, 2])); // "The light is on"