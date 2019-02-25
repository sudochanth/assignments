// var axios = require("axios"); in place of "cdn"

axios.get("https://api.vschool.io/sunny/todo").then(function(response) {
    renderTodos(response.data)
});

function renderTodos(todo) {
    // .map 
    todo.map(function(item) {

        // create elements
        var bigContainer = document.createElement("div");
        bigContainer.className = "bigContainer";
        var container = document.createElement("div");
        container.id = item._id;
        var title = document.createTextNode(`to do: ${item.title}`);
        var descrip = document.createTextNode(`description: ${item.description}`);
        var price = document.createTextNode(`price: ${item.price}`);
        var input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("select", function(e) {
            e.target.parentNode.style.textDecoration = "line-through";
        });
        input.className = "input";

        var deleteButton =document.createElement("button");
        deleteButton.id = "delete";
        var deleteText = document.createTextNode("delete");
        deleteButton.appendChild(deleteText);
        deleteButton.addEventListener("click", deleteObject);

        // append
        container.appendChild(input);
        container.appendChild(title);
        container.appendChild(document.createElement("br"));
        container.appendChild(descrip);
        container.appendChild(document.createElement("br"));
        container.appendChild(price);
        container.appendChild(document.createElement("br"));
        bigContainer.appendChild(container);
        document.getElementById("todo").appendChild(bigContainer);
        
        // create img
        // vvv you can add attributes .src/.className etc
        if (item.imgUrl) {
            var image = document.createElement("img");
            var pageImage = item.imgUrl;
            image.src = pageImage; 
            image.className = "image";
            container.appendChild(image);
        }

        container.appendChild(document.createElement("br"));
        container.appendChild(deleteButton);

        // event listener for click
        input.addEventListener("click", handleChecked);

        if (item.completed) {
        container.classList.toggle("strikened");
        input.checked = true;
        }
    }); 
}

function handleChecked(e) {
    e.target.parentNode.classList.toggle("strikened");
    var url = `https://api.vschool.io/sunny/todo/${e.target.parentNode.id}`;
    if (e.target.parentNode.classList == "strikened") {
        var newToDo = {
            "completed": true
        }
    } else {
        var newToDo = {
            "completed": false
        }
    }
    console.log(newToDo)
    axios.put(url, newToDo).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });
    
}


function deleteObject(e) {
    var url = `https://api.vschool.io/sunny/todo/${e.target.parentNode.id}`;

    axios.delete(url).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });

    alert(`You have deleted a to do object. Refresh page.`)
}

document.createList.addEventListener("submit", function(e) {
    e.preventDefault();
    var url = "https://api.vschool.io/sunny/todo";
    var newToDo = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        imgUrl: document.getElementById("image").value,
        completed: document.getElementById("completed").value
    };

    axios.post(url, newToDo).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });

    alert(`You have created a to do item. Refresh page.`)
});



























        // input.setAttribute("type", "checkbox"); same as .type


// description
// var des = document.createTextNode(`description: ${item.description}`);
        // para.textContent += `title: ${item.title}`;
        // para.textContent += `description: ${item.description}`;
        // container.appendChild(des);







  // use .map instead of for loop
    // for (var i = 0; i < response.data.length; i++) {
    //     // document.getElementById('todo').innerHTML += response.data[i].title;
    //     var para = document.createElement("p");
    //     var info = document.createTextNode(response.data[i].title);
    //     para.appendChild(info);
    //     document.body.appendChild(para);
    //     if (response.data[i].completed === true) {
    //         response.data[i].title.strike();
    //     }
    // }

// if (item.completed === true) {
//     var para = document.createElement("p");
//     var title = document.createTextNode(`title: ${item.title.strike()}`);
//     para.appendChild(title);
//     document.body.appendChild(para);
// } else {
//     var para = document.createElement("p");
//     var title = document.createTextNode(`title: ${item.title}`);
//     para.appendChild(title);
//     document.body.appendChild(para);
// }

 // // description
        // var para = document.createElement("p");
        // var des = document.createTextNode(`description: ${item.description}`);
        // para.appendChild(des);
        // document.body.appendChild(para);
        // // price
        // var para = document.createElement("p");
        // var price = document.createTextNode(`price: ${item.price}`);
        // para.appendChild(price);
        // document.body.appendChild(para);
        // // img
        // if (item.imgUrl === true) {
        //     var image = document.createElement("img");
        //     var imgsrc = document.createAttribute(`<imgsrc="${item.imgUrl}"/>`);
        //     image.appendChild(imgsrc);
        //     document.body.appendChild(image);
        // }