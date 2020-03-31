

const coordinates = {
    lat: -31.563910, 
    lng: 147.154312
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const idioma = urlParams.get('idiom');


document.getElementById('idiom').value = idioma;


var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyADjOfdGIg-7JiqjoTstMN9el4g-nLhxxA&callback=mapStart&language=' + idioma ;
document.head.appendChild(script);
function mapStart() {

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: coordinates,
            zoom: 3
        }
    );
}
