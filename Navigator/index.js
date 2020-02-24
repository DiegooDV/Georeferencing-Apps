

var navegador = document.getElementById("navegador");
var datos = navegador.getElementsByTagName("li");

function obtieneDatos() {
  datos[0].innerHTML = "Browser CodeName: "  + navigator.appCodeName;
  datos[1].innerHTML = "Browser Name: "  + navigator.appName;
  datos[2].innerHTML = "Browser version: " + navigator.appVersion;
  datos[3].innerHTML = "Internet status: " + navigator.onLine;
  datos[4].innerHTML = "Platform: " + navigator.platform;
  datos[5].innerHTML = "Cookies status: " + navigator.cookieEnabled;
  datos[6].innerHTML = "Browser Language: " + navigator.language;
}
