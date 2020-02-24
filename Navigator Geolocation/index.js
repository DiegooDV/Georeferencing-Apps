var x = document.getElementById("demo");  

  function getLocation() {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("El navegador no dispone la capacidad de geolocalización");
    }
  }
  
  function showPosition(position) {
    
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }