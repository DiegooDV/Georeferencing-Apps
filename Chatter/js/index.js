const loggedInElements = document.querySelectorAll(".logged-in");
const loggedOutElements = document.querySelectorAll(".logged-out");
var map;
var coordinates = {
    lat: 0,
    lng: 0
}
var properties = {
    center: coordinates,
    zoom:3,
    maxZoom: 8,
    minZoom:3

}
$("#btnStart").click(function () { 
    movePosition();
});

function mapStart()
{

    map = new google.maps.Map(document.getElementById("map"), properties);
}

function movePosition(){

    if(navigator.geolocation)
    {
    var icon = {
        url : "./IMG/userMarker.png",
        scaledSize: new google.maps.Size(50, 50)  
      };



    navigator.geolocation.getCurrentPosition(position => {

        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }

        var marker = new google.maps.Marker({
            position: {lat: pos.lat, lng: pos.lng},
            icon: icon,
            map : map
        });
        map.panTo(new google.maps.LatLng(pos.lat, pos.lng));
    });
    }
}

function showElements(user)
{
    if (user) {
        loggedInElements.forEach((item) => {
          item.style.display = "block";
        });
        loggedOutElements.forEach((item) => {
          item.style.display = "none";
        });
    }
    else{
        loggedInElements.forEach((item) => {
            item.style.display = "none";
          });
          loggedOutElements.forEach((item) => {
            item.style.display = "block";
          });
    }
}
