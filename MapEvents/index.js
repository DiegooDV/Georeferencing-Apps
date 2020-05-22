function mapStart() {
  const coordinates = {
    lat: 21.152639,
    lng: -101.711598,
  };

  const properties = {
    center: coordinates,
    zoom: 12,
  };

  var map;

  for (let index = 1; index <= 6; index++) {

    map = new google.maps.Map(
      document.getElementById(`map${index}`),
      properties
    );

    switch (index) {
      case 1:
        let marker = new google.maps.Marker({
          position: coordinates,
          map: map,
        });

        marker.addListener("click", function () {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });

        break;
      case 2: {
        let marker = new google.maps.Marker({
          position: coordinates,
          map: map,
        });

        map.addListener("center_changed", function () {
          window.setTimeout(function () {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        break;
      }
      case 3: {
        let infoWindow = new google.maps.InfoWindow({
          content: "Zoom changes",
          position: coordinates
        });

        infoWindow.open(map);

        map.addListener('zoom_changed', function(){
          infoWindow.setContent('Zoom lvl: ' + map.getZoom());
        });
        break;
      }
      case 4: {
        map.addListener('click', function(e){


          createMarker(e.latLng);

        })

        break;
      }
      case 5: {
        break;
      }
      case 6: {
        break;
      }

      default: {
        break;
      }
    }
  }
}

function createMarker(latLng)
{
  let marker = new google.maps.Marker({
    position: latLng,
    map: map,
  });
  map.panTo(latLng);
}
