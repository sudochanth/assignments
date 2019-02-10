// 1.

// function fiveAndGreaterOnly(arr) {
//     var greaterOnlyArr = arr.filter(function(num) {
//         return num > 5;
//     })
//     return greaterOnlyArr;
// }

// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2.

// function evensOnly(arr) {
//     var evenArr = arr.filter(function(num) {
//         return num % 2 === 0;
//     })
//     return evenArr;
// }

// console.log(evensOnly([3, 6, 8, 2]));

// 3.

// function fiveCharactersOrFewerOnly(arr) {
//     var fiveOnly = arr.filter(function(num) {
//         return num.length <= 5;
//     })
//     return fiveOnly;
// }

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// 4.

// function peopleWhoBelongToTheIlluminati(arr){
//     var notMembers = arr.filter(function(person) {
//         return person.member === false;
//     })
//     return notMembers;
// }
  
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));

// 5.

// function ofAge(arr){
//     var tooYoung = arr.filter(function(person) {
//         return person.age < 18;
//     })
//     return tooYoung;
// }
//   console.log(ofAge([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));