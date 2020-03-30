function mapStart() {
    var coordinates = {
        lat: -31.563910, 
        lng: 147.154312
    }

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: coordinates,
            zoom: 3
        }
    );
}