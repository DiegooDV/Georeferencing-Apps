var countries = document.getElementById("countries");

fetch('https://corona.lmao.ninja/v2/countries')
.then(function(response) {

    response.json().then(function(data) {

       data.forEach(element => {
           console.log(element.country);
           //let row = document.createElement("div");
         //  row.className = "row border border-dark";
          // countries.appendChild(row);

           let column = document.createElement("div");
           column.className = "col-4 border border-danger";
           countries.appendChild(column);

           let name = document.createElement("p");
           name.innerHTML = `<strong>Country:</strong> ${element.country} <br> <strong>Cases: </strong> ${element.cases}`
           column.appendChild(name);
       });

       
        
    });

});