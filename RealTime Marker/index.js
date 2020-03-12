var coordinates = {
    lat: 0,
    lng: 0
}

var properties = {
    center: coordinates,
    zoom: 20
}


function startMap()
{

    map = new google.maps.Map(document.getElementById("map"), properties);
    var icono = {
        url : "https://lh3.googleusercontent.com/proxy/0IOJ-i9lDa_ZvN32g8Dau9HyMzbVOaC4Qb-CIKHhBdQBsW8aNzaGrjxUvMmN8jyyXKq1qjYjLFq5yhVtlr_Q76JwCHE7fKv72dDzUz2Ipxeyy9GF83xkjvd6UMM",
        scaledSize: new google.maps.Size(50, 50),
        origin:  new google.maps.Point(0, 0),
        anchor : new google.maps.Point(0, 0)
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


        marker.setPosition(new google.maps.LatLng(pos.lat, pos.lng));
        map.panTo(new google.maps.LatLng(pos.lat, pos.lng));
        map.setCenter(position);
    });


}