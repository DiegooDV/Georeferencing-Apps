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
    const map = new google.maps.Map(document.getElementById("map"), properties);
   fetch("https://corona.lmao.ninja/countries")
   .then(function(response) {
    response.json().then(function(data){

        console.log(data[0]);
        data.forEach(element => {

                let marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(element.lat, element.long),
                    title: element.country
                });
           
        });
       
    });

   })
   .catch(function(error) {
       console.log(error.message);
   });
}
