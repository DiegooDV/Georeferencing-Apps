
$(document).ready(function () {
    getFlights();
});


function getFlights()
{

$.ajax({
    url: 'https://api.aviationstack.com/v1/flights',
    data: {
      access_key: '9d02ae2d659c64c26abccb19abeb8ac1'
    },
    dataType: 'json',
    success: function(apiResponse) {
      if (Array.isArray(apiResponse['results'])) {
        apiResponse['results'].forEach(flight => {
          if (!flight['live']['is_ground']) {
            console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
          }
        });
      }
    }
  });

}