function createEvenArray(highestNum) {
    for (var i = 0; i <= highestNum; i++) {
        if (i % 2 === 0 && i !==0) {
            console.log([i])
        }
    }
}
createEvenArray(10)