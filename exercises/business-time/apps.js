//sticky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



//search form
var submit = document.localSingles;

function returnFriend(e) {
  e.preventDefault();
  var miles = document.localSingles.miles.value;
  var size = document.localSingles.size.value;
  var interestsArr = [];
  var checkedInterests = document.querySelectorAll("input[name=interests]:checked");
  for (var i = 0; i < checkedInterests.length; i++) {
    console.log(checkedInterests[i].value);
    interestsArr.push(checkedInterests[i].value);
  }
  alert(`You're looking for a friend ${miles} away from you. Also looking for a pupper that is ${size} than you. You're also looking for a buddy ${interestsArr}. Right?`)

  var miles = "";
  var checkedInterests = "";
  var size ="";

}

submit.addEventListener("submit", returnFriend);