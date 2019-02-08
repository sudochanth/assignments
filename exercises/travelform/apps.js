// console.dir(document.travelform)
// var newForm = document.travelform.passengerInfo;
function returnAlert(e) {
    event.preventDefault();
    

    //collect values
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var age = document.getElementById("userage").value;
    var gender = document.getElementById("gender").value;
    var userDestination = document.getElementById("destination").value;
    
    var checkedDiet = document.passengerInfo.addEventListener("submit", function(e) {
        e.preventDefault();
        var checkedDiet = [];
        var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
        for (var i = 0; i < checkedBoxes.length; i++) {
            console.log(checkedBoxes[i].value)
            checkedDiet.push(checkedBoxes[i].value);
        }

        alert(`Thank you for choosing Arkham Air for your travel needs! Please review the following information.\n First Name: ${fName}\n Last Name: ${lName}\n Age: ${age}\n Gender: ${gender}\n Destination: ${userDestination}\n Dietary restrictions: ${checkedDiet}`);    
    })

   


}


// listens for click to return values
document.passengerInfo.addEventListener("submit", returnAlert)