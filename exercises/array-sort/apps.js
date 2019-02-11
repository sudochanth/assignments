// Array Sort

// 1.
// function leastToGreatest(arr) {
//     var newArr = arr.sort(function(a, b) {
//         return a - b;
//     })
//     return newArr;
// };
  
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

  // 2.
//   function greatestToLeast(arr) {
//     var newArr = arr.sort(function(a, b) {
//         return b - a;
//     })
//     return newArr;
//   }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

// 3.
// function lengthSort(arr) {
//     var newArr = arr.sort(function(a, b) {
//         return a.length - b.length
//     })
//     return newArr;
// }
  
//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 
  

// 4.
// function alphabetical(arr) {
//     var newArr = arr.sort();
//     return newArr;
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 


// 5. 
function byAge(arr){
    var newArr = arr.sort(function(a, b) {
        return a.age - b.age;
    });
    return newArr;
  }
  
  console.log(byAge([
      {
          name: "Quiet Samurai",
          age: 22
      },
      {
          name: "Arrogant Ambassador",
          age: 100
      },
      {
          name: "Misunderstood Observer",
          age: 2
      },
      {
          name: "Unlucky Swami",
          age: 77
      }
  ]));