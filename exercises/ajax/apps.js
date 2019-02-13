var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data.objects[0].pokemon);
        for (var i = 0; i < data.objects[0].pokemon.length; i++) {
            var para = document.createElement("p");
            var pokeName = document.createTextNode(data.objects[0].pokemon[i].name);
            para.appendChild(pokeName);
            document.body.appendChild(para);
        }
    }
};


xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();