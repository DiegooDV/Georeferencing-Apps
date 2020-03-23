var countries = document.getElementById("countries");

fetch('data.json')
.then(function(response) {

    response.json().then(function(datos) {

        console.log(datos);
    });

});