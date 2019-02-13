// Reduce

// 1.
// function total(arr) {
//     var newArr = arr.reduce(function(a, b) {
//         return a + b;
//     })
//     return newArr;
// }
 
//  console.log(total([1,2,3])); // 6

 // 2.
//  function stringConcat(arr) {
//     var newArr = arr.reduce(function(a, b) {
//         return a.toString() + b.toString();
//     }) 
//     return newArr;
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"
 
// 3.
// function totalVotes(arr) {
//     var newTotal = voters.reduce(function(a, b) {
//         return a + b.voted;
//     }, 0)
//     return newTotal;
// }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

// 4.
// function shoppingSpree(arr) {
//     var newArr = arr.reduce(function(sum, item) {
//         return sum += item.price;
//     }, 0)   
//     return newArr;
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

// 5. vvvv what did i do?
// function flatten(arr) {
//     var newArr = [].concat.apply([], arr);  
//     return newArr;
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   var results = arr.reduce(function(sum, item) {
       if (item.age >= 18 && item.age <= 25) {
           return `youngVotes: ${sum + item.voted}`;
       }

   }, 0)

   return results;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
