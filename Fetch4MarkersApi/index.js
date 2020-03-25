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

            var info = `<img src="${element.countryInfo.flag}">`

            var infowindow = new google.maps.InfoWindow({
                content: info
            })

            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(element.countryInfo.lat, element.countryInfo.long),
                title: element.country
            });

            if(element.country.toLowerCase() == "usa" )
            {
                marker.title = "United States";
                marker.position =  new google.maps.LatLng(37.09024, -95.712891),
            }


                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });
           

        });
       
    });

   })
   .catch(function(error) {
       console.log(error.message);
   });
}
