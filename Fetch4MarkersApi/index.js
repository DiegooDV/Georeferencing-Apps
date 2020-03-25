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

            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(element.countryInfo.lat, element.countryInfo.long),
                title: element.country
            });

            if(element.country.toLowerCase() == "usa" )
            {
                marker.title = "United States";
                marker.position =  new google.maps.LatLng(37.09024, -95.712891);

               info = `<img style="width:5rem: height: 2.5rem;"
               src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png">`
            }

         

            var infowindow = new google.maps.InfoWindow({
                content: info
            })

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
