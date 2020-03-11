var coordinates = {
    lat: 0,
    long: 0
}

var properties = {
    center: coordinates,
    zoom: 20
}


function startMap()
{

    map = new google.maps.Map(document.getElementById("map"), properties);
    var icono = {
        url : "https://media1.giphy.com/media/CXG1VWTkjEgHC/source.gif",
        scaledSize: new google.maps.Size(50, 50),
        origin:  new google.maps.Point(0,0),
        anchor : new google.maps.Point(0,0)
    };

    var marker = new google.maps.Marker({
        position: {lat: 0, lng: 0},
        icon: icono,
        map : map
    });


    if(navigator.geolocation)
    {
        setInterval(function() {
            movePosition(marker);
        },3000);
        
    }

}

function movePosition(marker){

    navigator.geolocation.getCurrentPosition(position => {

        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }


        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        map.setCenter(pos);
    });


}