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

            var icon = {
                url : "../Icons/corona.png",
                scaledSize: new google.maps.Size(20, 20),
                origin:  new google.maps.Point(0, 0),
                anchor : new google.maps.Point(0, 0)
            };

            var info = `<img src="${element.countryInfo.flag}">
            <br><Strong>Cases:</Strong> ${element.cases} 
               <br><Strong>Deaths:</Strong> <span class="text-danger">${element.deaths}</span>
               <br><Strong>Today cases:</Strong> ${element.todayCases}
               <br><Strong>Today deaths:</Strong> <span class="text-danger">${element.todayDeaths}</span>`

            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(element.countryInfo.lat, element.countryInfo.long),
                title: element.country,
                icon : icon
            });

            if(element.country.toLowerCase() == "usa" )
            {
                marker.title = "United States";
                marker.position =  new google.maps.LatLng(37.09024, -95.712891);

               info = `<img class="responsiveImg"
               src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png">
               <br><Strong>Cases:</Strong> ${element.cases} 
               <br><Strong>Deaths:</Strong> <span class="text-danger">${element.deaths}</span>
               <br><Strong>Today cases:</Strong> ${element.todayCases}
               <br><Strong>Today deaths:</Strong> <span class="text-danger">${element.todayDeaths}</span>`
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
