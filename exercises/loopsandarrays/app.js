// 1.
var evenArray = []
function createEvenArray(highestNum) {
    for (var i = 0; i <= highestNum; i++) {
        if (i % 2 === 0 && i !==0) {
            evenArray.push(i)
        }
    }
    console.log(evenArray)    
}
createEvenArray(10)

function addOdds(evensOnlyArray) {
    for (var i = 0; i <= evenArray.length; i++) {
        var i = i + 1;
        evenArray.push(i)
    }
    console.log(evenArray)
}

addOdds(createEvenArray)

