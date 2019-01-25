var shopper = {
    storeName: "Wally's World",
    distanceInFeet: 100,
    isLocationSketch: true,
    groceryCarts: ["chocolate", "milk", "bacon", "child"],
    // greeting: function(firstName) {
    //     console.log("Hello " + firstName)
    // }
    shopHere: function() {
        if (isLocationSketch == true) {
            console.log("Don't shop here")
        } else {
            console.log("Shop here");
        }
    }
};

console.log(shopper.storeName)
console.log(shopper.groceryCarts[3])
// shopper.greeting("sunny")
console.log(shopper.distanceInFeet)
shopper.shopHere(true)

