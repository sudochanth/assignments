var button = document.getElementById("button");
var counter = localStorage.count || 0;
var para = document.getElementById("para");
para.textContent = counter;

document.getElementById("button").addEventListener("click", function() {
    counter++
    localStorage.count = counter;
    para.textContent = counter;
});


