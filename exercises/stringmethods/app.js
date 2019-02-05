// // 1.
// function capitalizeAndLowercase(str) {
//     return str.toUpperCase() + str.toLowerCase()
// }

// console.log(capitalizeAndLowercase("Hello"))

// 2.
// function findMiddleIndex(str) {
//     return (Math.floor(str.length / 2))
// }
// //vvv console the call for the function or choose to console.log in function instead?
// console.log(findMiddleIndex("hello"))
// console.log(findMiddleIndex("hello world"))

// // 3.
// function returnFirstHalf(str) {
//     return str.slice(0, findMiddleIndex(str))
// }

// console.log(returnFirstHalf("Hello"))
// console.log(returnFirstHalf("Hello World"))

// 4.
// function capitalizeAndLowercase(str) {
//     var returnFirstHalf = str.slice(0, findMiddleIndex(str))
//     var returnSecondHalf = str.slice(findMiddleIndex(str))
//     return returnFirstHalf.toUpperCase() + returnSecondHalf.toLowerCase()
// }

// console.log(capitalizeAndLowercase("Hello")) // => "HEllo"
// console.log(capitalizeAndLowercase("Hello World")) // => "HELLO world"