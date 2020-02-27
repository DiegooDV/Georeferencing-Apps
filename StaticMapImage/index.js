
function obtieneUbicacion(){

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(muestraPosicion);
  }
  else
  {
    alert("No");
  }
}


  function muestraPosicion(posicion){
    var coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;
    console.log(coordenadas);

    var imagenurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + coordenadas + "&zoom=20&size=800x800&key=AIzaSyADjOfdGIg-7JiqjoTstMN9el4g-nLhxxA";
    
    console.log(imagenurl);

    document.getElementById("mapa").innerHTML = "<img src=" + imagenurl + ">";
  
  }
