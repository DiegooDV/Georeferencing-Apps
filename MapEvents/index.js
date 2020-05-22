function mapStart() {
  const coordinates = {
    lat: 21.152639,
    lng: -101.711598,
  };

  const properties = {
    center: coordinates,
    zoom: 12,
  };

  var maps = [];

  for (let index = 1; index <= 6; index++) {

    maps[index] = new google.maps.Map(
      document.getElementById(`map${index}`),
      properties
    );
    switch (index) {
      case 1:
        
        let marker = new google.maps.Marker({
          position: coordinates,
          map:  maps[index],
        });

        marker.addListener("click", function () {
          maps[index].setZoom(8);
          maps[index].setCenter(marker.getPosition());
        });

        break;
      case 2: {
        let marker = new google.maps.Marker({
          position: coordinates,
          map:  maps[index],
        });

        maps[index].addListener("center_changed", function () {
          window.setTimeout(function () {
            maps[index].panTo(marker.getPosition());
          }, 3000);
        });

        break;
      }
      case 3: {
        let infoWindow = new google.maps.InfoWindow({
          content: "Zoom changes",
          position: coordinates
        });

        infoWindow.open(maps[index]);

        maps[index].addListener('zoom_changed', function(){
          infoWindow.setContent('Zoom lvl: ' +  maps[index].getZoom());
        });
        break;
      }
      case 4: {
        maps[index].addListener('click', function(e){
          createMarker(e.latLng, maps[index]);
        })
        break;
      }
      case 5: {
        let infoWindow2 = new google.maps.InfoWindow({
          content: "Click to get coordinates",
          position: coordinates
        });

        infoWindow2.open(maps[index]);

        maps[index].addListener('click', function(mapsMouseEvent){
          infoWindow2.close();

           infoWindow2 = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng
          });

          infoWindow2.setContent(mapsMouseEvent.latLng.toString());

        })
        break;
      }
      case 6: {

        google.maps.event.addDoomListener(maps[index], 'click', function(){
          window.alert('Map clicked!');
        })

        var button = document.getElementById('btnCenter');
        google.maps.event.addDoomListener(button, 'click', function(){
          maps[index].panTo(coordinates);
        })

        break;
      }

      default: {
        break;
      }
    }
  }
}



function createMarker(latLng, map)
{
  let marker = new google.maps.Marker({
    position: latLng,
    map:  map,
  });
  map.panTo(latLng);
}
