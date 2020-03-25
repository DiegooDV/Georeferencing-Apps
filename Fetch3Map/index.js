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

    var markersArray = getmarkers();

    console.log(markersArray);

    markersArray.forEach(element => {
        
        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(element.latitude, element.longitude),
            title: element.name
        });
    });
}

function getmarkers()
{
    const markers = [
        {
            "name": "Mexico",
            "latitude": 23.634501,
            "longitude": -102.552784
        }, {
            "name": "United Kingdom",
            "latitude": 55.378051,
            "longitude": -3.435973
        }, {
            "name": "China",
            "latitude": 35.86166,
            "longitude": 104.195397
        }
    ]

    return markers;
}