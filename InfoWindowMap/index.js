    function iniciaMapa(){

        var map = new google.maps.Map(document.getElementById("map"),
        { center: { lat: 21.115605, lng: -101.658132 } , zoom: 14 });


        informacion = new google.maps.InfoWindow;

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var pos = { 
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                informacion.setPosition(pos);
                informacion.setContent("<div class='container-fluid bg-success'><h4 >HERE YOU ARE</div> </h4><div class='container'> <br> <img src='https://furtaev.ru/preview/user_on_map_2_small.png'width='50' height='50'> This is your location</div");
                informacion.open(map);
                map.setCenter(pos);

            });

        }

    }