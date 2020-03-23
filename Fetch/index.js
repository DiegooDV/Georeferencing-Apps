var countries = document.getElementById("countries");

fetch('data.json')
.then(function(response) {

    response.json().then(function(data) {

       data.forEach(element => {
           console.log(element.country);
           let name = document.createElement("div");
           name.textContent = `Country: ${element.country}, cases: ${element.cases}`
           countries.appendChild(name);
       });

       
        
    });

});