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
        scaledSize: new google.maps.Size(50,50),
        origin:  new google.maps.Point(0,0),
        anchor : new google.maps.Point(0,0)
    };
    
    var marker = new google.maps.Marker({
        position: {lat: 0, long: 0},
        icon: icono,
        scaledSize : new google.maps.Size(50,50),
        map : map
    });


    if(navigator.geolocation)
    {
        movePosition(marker);
    }

}

function movePosition(marker){

    navigator.geolocation.getCurrentPosition(position => {

        var pos = {
            lat : position.coords.latitude,
            lng : position.coords.longitude
        }


        marker.setPosition(new google.maps.LatLng(position.coordinates.lat, position.coordinates.lng));

        map.panTo(new google.maps.LatLng(position.coordinates.lat, position.coordinates.lng));
        map.setCenter(pos);
    });


}