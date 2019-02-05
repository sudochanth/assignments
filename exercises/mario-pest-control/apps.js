//return total
function returnCoin(e) {
    event.preventDefault();

    var goomba = document.getElementById("goomba").value;
    var bobomb = document.getElementById("bobomb").value;
    var cheep = document.getElementById("cheep").value;
    var totalCoins = (goomba * 5) + (bobomb * 7) + (cheep * 11);
// the paranthesis here make this line ^^ extra readable. Good work
    document.getElementsByClassName("totalCoins")[0].innerHTML = `Your total is ${totalCoins} coins!!!`

    document.getElementById("goomba").value = "";
    document.getElementById("bobomb").value = "";
    document.getElementById("cheep").value = "";
}

document.total.addEventListener("submit", returnCoin);

// You know what you're doing! Good work
