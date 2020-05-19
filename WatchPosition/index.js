
        function mapStart(){


            var properties = {
                center: { 
                     lat: 21.152639, lng:  -101.711598
                },
                zoom: 12
            };

            var map = document.getElementById("map");

            var map = new google.maps.Map(map, properties);

            var icon = {
                url : "../IMG/locationMark.gif",
                scaledSize: new google.maps.Size(25, 25),
                origin:  new google.maps.Point(0, 0),
                anchor : new google.maps.Point(0, 0)
            };
        
            var marker = new google.maps.Marker({
                position: {lat: 0, lng: 0},
                icon: icon,
                map : map
            });

            var watchId = null;
            const btnWatch = document.getElementById('btnWatch');

            var positionOptions = {
                enableHighAccuracy : true,
                timeout : 10 * 1000,
                maximumAge : 30 * 1000 //10 seconds
            };

            if(navigator.geolocation){
                btnWatch.addEventListener('click', function(){

                    watchId = navigator.geolocation.watchPosition(function(position){
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;

                        var coordinates = `${lat}, ${lng}`;

                        var accuracy = position.coords.accuracy? position.coords.accuracy : 'No available';
                        var altitude = position.coords.altitude? position.coords.altitude : 'No available';
                        var speed = position.coords.speed? position.coords.speed : 'No available';
                        var time = new Date(position.timestamp).toString();




                        const html = `<h4 class="text-white">Coordinates: ${coordinates}</h4>
                        <h4 class="text-white">Accuracy: ${accuracy}</h4>
                        <h4 class="text-white">Altitude: ${altitude}</h4>
                        <h4 class="text-white">Speed: ${speed}</h4>
                        <h4 class="text-white">Time: ${time}</h4>`;

                        const data = document.getElementById('data');
                        data.innerHTML = html;

                        marker.setPosition(new google.maps.LatLng(lat, lng));
                        map.parentNode(new google.maps.LatLng(lat, lng));

                    }, error, positionOptions); 
                })
            }

            const btnStop = document.getElementById('btnStop');

            btnStop.addEventListener('click', function() {
                
                if (watchId  !== null) {
                    navigator.geolocation.clearWatch(watchId);
                    let html = `<h4 class="text-white">Se detuvo el monitoreo</h4>`;
                    data.innerHTML = html;
                }
            })
        }

        function error(positionError)
        {
            console.log(positionError.message);
        }

