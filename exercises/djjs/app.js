var box = document.getElementById("square");

function blueBox() {
    box.style.backgroundColor = "blue";
}

box.addEventListener("mouseover", blueBox)

function defaultBox() {
    box.style.backgroundColor = "whitesmoke";
}

box.addEventListener("mouseleave", defaultBox)

function clickOff() {
    box.style.backgroundColor = "yellow";
}

box.addEventListener("mouseup", clickOff)

function doubleClickBox() {
    box.style.backgroundColor = "green";
}

box.addEventListener("dblclick", doubleClickBox)

function mouseScroll(e) {
    if (e.deltaY > 0) {
        box.style.backgroundColor = "orange";
    } else {
        box.style.backgroundColor = "red";
    }
}

document.body.addEventListener("wheel", mouseScroll)

function pressKeys(e) {
    if (e.key === "r") {
        box.style.backgroundColor = "red";
    } else if (e.key === "y") {
        box.style.backgroundColor = "yellow";
    } else if (e.key === "b") {
        box.style.backgroundColor = "blue";
    }  else if (e.key === "g") {
        box.style.backgroundColor = "green"
    } else if (e.key === "o") {
        box.style.backgroundColor = "orange"
    } else {
        box.style.backgroundColor = "pink"
    }
}

document.body.addEventListener("keypress", pressKeys)