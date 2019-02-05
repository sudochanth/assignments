var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrFruit() {
    vegetables.pop()
    fruit.shift();
    fruit.push(fruit.indexOf("orange"))
    vegetables.push(vegetables.length)
    var food = fruit.concat(vegetables);
    food.splice(4, 2)
    food.reverse()
    return food.join()
}

console.log(arrFruit())


// // sample test logs vvv
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);