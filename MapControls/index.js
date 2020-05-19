function mapStart() {
  const coordinates = {
    lat: 21.152639,
    lng: -101.711598,
  };

  var properties = [];
  for (let index = 1; index <= 6; index++) {
    switch (index) {
      case 1:
        properties[index] = {
          center: coordinates,
          zoom: 12,
        };
        break;
      case 2: {
        properties[index] = {
          center: coordinates,
          zoom: 12,
          disableDefaultUI: true,
        };
        break;
      }
      case 3: {
        properties[index] = {
          center: coordinates,
          zoom: 12,
          zoomControl: false,
          scaleControl: true,
        };
        break;
      }
      case 4: {
        properties[index] = {
          center: coordinates,
          zoom: 12,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ["roadmap", "satellite", "terrain"],
          },
        };
        break;
      }
      case 5: {
        properties[index] = {
          center: coordinates,
          zoom: 12,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControlOptions : {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        };
        break;
      }
      case 6:{

        let limits = {
            north: 21.390039,
            south: 20.858414,
            west: -102.149631,
            east: -101.092990
        }

        properties[index] = {
            center: coordinates,
            zoom: 12,
            restriction : {
                latLngBounds: limits,
                strictBounds: false
            }
          };
        break;
      }

      default:{
        break;
      }
    }

    let map = new google.maps.Map(
      document.getElementById(`map${index}`),
      properties[index]
    );
  }
}
