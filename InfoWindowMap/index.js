    function iniciaMapa(){

        var map = new google.maps.Map(document.getElementById("map"),
        { center: { lat: 21.152639, lng: -101.711598 } , zoom: 14 });


        informacion = new google.maps.InfoWindow;

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var pos = { 
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                informacion.setPosition(pos);
                informacion.setContent("HERE ARE U <br> <img src='../IMG/crown.png'>");
                informacion.open(map);
                map.setCenter(pos);

            });

        }

    }