var map = null;
var my_boundaries = [];
var data_layer;
var countriesList = {};

var coordinates = {
  lat: 0,
  lng: 0
};

function initializeDataLayer() {
  if (data_layer) {
    data_layer.forEach(function(feature) {
      data_layer.remove(feature);
    });
    data_layer = null;
  }
  data_layer = new google.maps.Data({ map: map }); //initialize data layer which contains the boundaries. It's possible to have multiple data layers on one map
  data_layer.setStyle({
    //using set style we can set styles for all boundaries at once
    fillColor: "white",
    strokeWeight: 1,
    fillOpacity: 0.1
  });

  /*	data_layer.addListener('click', function(e) { //we can listen for a boundary click and identify boundary based on e.feature.getProperty('boundary_id'); we set when adding boundary to data layer
  		var boundary_id = e.feature.getProperty('boundary_id');
  		var boundary_name = "NOT SET";
  		if(boundary_id && my_boundaries[boundary_id] && my_boundaries[boundary_id].name) boundary_name = my_boundaries[boundary_id].name;
  		if(info_window){
  			info_window.setMap(null);
  			info_window = null;
  		}
  		info_window = new google.maps.InfoWindow({
  			content: '<div>You have clicked a boundary: <span style="color:red;">' + boundary_name + '</span></div>',
  			size: new google.maps.Size(150,50),
  			position: e.latLng, map: map
  		});
  	});
	*/
  data_layer.addListener("mouseover", function(e) {
    data_layer.overrideStyle(e.feature, {
      strokeWeight: 3,
      strokeColor: "#ff0000"
    });
  });

  data_layer.addListener("mouseout", function(e) {
    data_layer.overrideStyle(e.feature, {
      strokeWeight: 1,
      strokeColor: ""
    });
  });
}

function loadBoundariesFromGeoJson(geo_json_url) {
  initializeDataLayer();
  $.getJSON(geo_json_url, function(data) {
    if (data.type == "FeatureCollection") {
      //we have a collection of boundaries in geojson format
      if (data.features) {
        for (var i = 0; i < data.features.length; i++) {
          var boundary_id = i + 1;
          var new_boundary = {};
          if (!data.features[i].properties) data.features[i].properties = {};
          data.features[i].properties.boundary_id = boundary_id; //we will use this id to identify boundary later when clicking on it
          data_layer.addGeoJson(data.features[i], {
            idPropertyName: "boundary_id"
          });
          new_boundary.feature = data_layer.getFeatureById(boundary_id);
          if (data.features[i].properties.name)
            new_boundary.name = data.features[i].properties.name;
          if (data.features[i].properties.NAME)
            new_boundary.name = data.features[i].properties.NAME;
          my_boundaries[boundary_id] = new_boundary;
        }
      }

      my_boundaries.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

    }
  });

  return true;
}

 function mapStart() {
  fetch("https://corona.lmao.ninja/countries")
    .then(function(response) {
      response.json().then(function(data) {

        data.sort(function(a, b) {
          var textA = a.country.toUpperCase();
          var textB = b.country.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });

        countriesList = data;

        var infowindow = new google.maps.InfoWindow();
        data.forEach(element => {
          var icon = {
            url: "../Icons/corona.png",
            scaledSize: new google.maps.Size(30, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
          };

          var info = `<div class="gm-style-iw">
            <h6>${element.country}</h6>
              <img class="responsiveImg" src="${element.countryInfo.flag}">
              <br><br><Strong>Cases:</Strong> ${new Intl.NumberFormat().format(element.cases)} 
               <br><Strong>Deaths:</Strong> <span class="text-danger">${new Intl.NumberFormat().format(element.deaths)}</span>
               <br><Strong>Today cases:</Strong> ${new Intl.NumberFormat().format(element.todayCases)}
               <br><Strong>Today deaths:</Strong> <span class="text-danger">${new Intl.NumberFormat().format(element.todayDeaths)}</span>
               </div>`;

          
          let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(
              element.countryInfo.lat,
              element.countryInfo.long
            ),
            title: element.country,
            icon: icon
          });

          if (element.country.toLowerCase() == "usa") {
            marker.title = "United States";
            marker.position = new google.maps.LatLng(37.09024, -95.712891);

            info = `<div class="gm-style-iw">
               <h6>United States</h6>
               <img class="responsiveImg"
               src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png">
               <br><br><Strong>Cases:</Strong> ${new Intl.NumberFormat().format(element.cases)} 
               <br><Strong>Deaths:</Strong> <span class="text-danger">${new Intl.NumberFormat().format(element.deaths)}</span>
               <br><Strong>Today cases:</Strong> ${new Intl.NumberFormat().format(element.todayCases)}
               <br><Strong>Today deaths:</Strong> <span class="text-danger">${new Intl.NumberFormat().format(element.todayDeaths)}</span>
               </div>`;
          }

          

          marker.addListener("click", function() {
            infowindow.setContent(info);
            infowindow.open(map, marker);
          });
        });

        colorCountries();
      });
      
    })
    .catch(function(error) {
      console.log(error.message);
    });
    
    

}

 function start() {

  var myOptions = {
    zoom: 2,
    center: coordinates
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  let promise = new Promise(function(resolve, reject) {
  if(loadBoundariesFromGeoJson(
    "https://raw.githubusercontent.com/matej-pavla/Google-Maps-Examples/master/BoundariesExample/geojsons/world.countries.geo.json"
  )){
      resolve("done");
  }
  else{
      reject(new Error("not loaded"));
  }

    
  }).then(function() {
    mapStart();
  })

 

}

function colorCountries()
{
   // console.log(my_boundaries[1].name); //181
   // console.log(countriesList.length);//199

   //Modyfy wrong names

 my_boundaries[168].name = "Tanzania,";
 my_boundaries[145].name = "S. Korea";
 my_boundaries[87].name = "Lao";
 my_boundaries[78].name = "Coast D";
 my_boundaries[38].name = "Congo,";
  my_boundaries[169].name = "Usa";
  my_boundaries[131].name = "Serbia";
 my_boundaries[132].name = "Congo";
 my_boundaries[65].name = "Guinea-Bissau";
 my_boundaries[167].name = "UK";
  my_boundaries[18].name = "Bosnia";
  my_boundaries[37].name = "Czechia";
 my_boundaries[175].name = "Palestinian Territory, Occupied";
 my_boundaries[166].name = "UAE";
  
  //console.log(countriesList);
    for (let index = 0; index < countriesList.length; index++) {
    // console.log(countriesList[index].country + " " + index);

        for(let index2 = 0; index2 < 180; index2++){

           
           //console.log(my_boundaries[index2].name + " " + index2);
            if(my_boundaries[index2].name != null)
            {
            if(countriesList[index].country.toLowerCase() == my_boundaries[index2].name.toLowerCase()  ||
             countriesList[index].country.toLowerCase().includes(my_boundaries[index2].name.toLowerCase()
             || my_boundaries[index2].name.toLowerCase().includes(countriesList[index].country.toLowerCase()) )
            )
            {         
                let countryCases = countriesList[index].cases
                let color = "#ffffff";
                if(countryCases > 0 && countryCases <= 1000)
                {
                    color = "#facfcf";
                }
                else if(countryCases > 1000 && countryCases <= 10000)
                {
                    color = "#ff6e6e";
                }
                else if(countryCases > 10000)
                {
                    color = "#ff0a0a";
                }
                else{
                 color = "#000000";
                }
                data_layer.overrideStyle(my_boundaries[index2].feature, {
                    fillColor: color,
                    fillOpacity: 0.8
                  });
            }
          
            
        }
        }    
    }

}