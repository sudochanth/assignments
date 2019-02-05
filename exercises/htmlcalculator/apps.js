var createForm = document.add;


//addition
function addNum() {
    event.preventDefault();
    var num1 = createForm.fNumber.value;
    var num2 = createForm.sNumber.value;
    var addSum = parseInt(num1) + parseInt(num2);
    // var result = document.createElement("p");
    // var node = document.createTextNode(`${num1} plus ${num2} equals ${addSum}`);
    // result.appendChild(node);
    // var printResult = document.getElementsByClassName("addResult");
    // printResult.appendChild(result); appendchild is not a function????

    document.getElementsByClassName("addResult")[0].innerHTML = `${num1} plus ${num2} equals ${addSum}`;

    //clears input values
    createForm.fNumber.value = "";
    createForm.sNumber.value = "";
}

createForm.addEventListener("submit", addNum);

//subtraction
var subForm = document.sub;
function subNum() {
    event.preventDefault();
    var num1 = subForm.fNumber.value;
    var num2 = subForm.sNumber.value;
    var subSum = parseInt(num1) - parseInt(num2);

    document.getElementsByClassName("subResult")[0].innerHTML = `${num1} take away ${num2} equals ${subSum}`;

    //clears input value
    createForm.fNumber.value = "";
    createForm.sNumber.value = "";
}

//mulitiplication
subForm.addEventListener("submit", subNum);

var multForm = document.multiply;
function multNum() {
    event.preventDefault();
    var num1 = multForm.fNumber.value;
    var num2 = multForm.sNumber.value;
    var multSum = parseInt(num1) * parseInt(num2);

    document.getElementsByClassName("multResult")[0].innerHTML = `${num1} times ${num2} equals ${multSum}`;
    //clears input value
    createForm.fNumber.value = "";
    createForm.sNumber.value = "";
}

multForm.addEventListener("submit", multNum);

