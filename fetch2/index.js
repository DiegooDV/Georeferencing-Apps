var countries = document.getElementById("countries");

fetch('https://corona.lmao.ninja/countries')
.then(function(response) {

    response.json().then(function(data) {

       data.forEach(element => {
           console.log(element.country);
           let row = document.createElement("div");
           row.className = "row border bg-light";
           countries.appendChild(row);

           let column = document.createElement("div");
           row.className = "col-12";
           row.appendChild(column);

           let name = document.createElement("p");
           name.textContent = `Country: ${element.country}, cases: ${element.cases}`
           column.appendChild(name);
       });

       
        
    });

});