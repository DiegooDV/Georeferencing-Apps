var coordinates = {
    lat: 0,
    lng: 0
}

var properties = {
    center: coordinates,
    zoom: 2
}


function mapStart()
{
   fetch("https://corona.lmao.ninja/countries")
   .then(function(response) {
    response.json.then(function(data){
        console.log(data[0]);
    })

   })
   .catch(function(error) {
       console.log(error.message);
   });
}
