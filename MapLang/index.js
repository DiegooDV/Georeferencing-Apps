

const coordinates = {
    lat: 0, 
    lng: 0
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const idiom = urlParams.get('idiom');


document.getElementById('sltIdiom').value = idiom;


var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCNe-mjWzhEUSwDH7BvgJWtMxZUZmmFI2U&callback=mapStart&language=' + idiom;
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
