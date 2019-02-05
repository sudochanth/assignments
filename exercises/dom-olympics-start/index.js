console.dir(document)

document.getElementById("header").innerHTML = `
<h2 class="header">JavaScript Made This!!</h2>
<h5 class="header"> <div> <span class="name">Sunny</span> wrote the javascript</h5> </div>
`;

var leftMes = document.getElementsByClassName("left");
var rightMes = document.getElementsByClassName("right");

leftMes[0].innerHTML = "what is brown and sticky?";

rightMes[0].innerHTML = "idk what";

leftMes[1].innerHTML = "a stick :D";

rightMes[1].innerHTML = "you're stupid";

function clearContent() {
    document.getElementsByClassName('messages')[0].innerHTML = "";
}

document.getElementById("clear-button").addEventListener('click', clearContent)



function changeColor() {
    if (document.getElementById("theme-drop-down").value === "theme-two") {
        leftMes[0].style.backgroundColor = "black";
        leftMes[1].style.backgroundColor = "black";
        rightMes[0].style.backgroundColor = "red";
        rightMes[1].style.backgroundColor = "red";
    } else {
        leftMes[0].style.backgroundColor = "brown";
        leftMes[1].style.backgroundColor = "brown";
        rightMes[0].style.backgroundColor = "blue";
        rightMes[1].style.backgroundColor = "blue";
    }
}

document.getElementById("theme-drop-down").addEventListener("change", changeColor);

function newMessage() {
    // var userMessage = document.getElementById("messageInput")
        
    //create new div
    var newMessage = document.createElement("div");
    //give class
    newMessage.className = "message right";
    //give it text
    newMessage.textContent = document.getElementById("messageInput").value;
    // console.log(newMessage)
    // appendchild
    document.getElementsByClassName("messages")[0].appendChild(newMessage);
}

document.getElementById("addMessage").addEventListener("click", newMessage);

// change form name on line 35 and then create element in div messages
// create method that will add a new div element to div "messages", appendChild
// create event listener to listen to button click and call method


