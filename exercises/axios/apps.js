// var axios = require("axios");

axios.get("https://api.vschool.io/sunny/todo").then(function(response) {
    // .map
    response.data.map(function(item) {
        // create elements
        var container = document.createElement("div");
        container.className = "todoBox";
        var para = document.createElement("p");
        var title = document.createTextNode(`to do: ${item.title}`);
        var descrip = document.createTextNode(`description: ${item.description}`)

        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = item._id;
        input.addEventListener("select", function(e) {
            e.target.style.textDecoration = "line-through";
        });
        input.className = "input";

        // append
        container.appendChild(input);
        container.appendChild(title);
        container.appendChild(para);
        container.appendChild(descrip);

        document.getElementById("todo").appendChild(container);
        
        // create img
        // vvv you can add attributes .src/.className etc
        if (item.imgUrl) {
            var image = document.createElement("img");
            var pageImage = item.imgUrl;
            image.src = pageImage; 
            image.className = "image";
            container.appendChild(image);
        }


        input.addEventListener("click", handleChecked);

        if (item.completed) {
           container.classList.toggle("strikened");
           input.checked = true;
        }
    })


});





function handleChecked(e) {
    console.log(e);
    e.target.parentNode.classList.toggle("strikened");
}
































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