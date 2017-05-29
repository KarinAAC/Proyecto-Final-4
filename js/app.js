function initMap() {
  var lab = {lat: -12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom:18,center:lab
  });

  var marcador = new google.maps.Marker({
    position: lab,
    map: map
  });



  var latitud, longitud, Ubicacion;
  var funcionExito=function(posicion){
    latitud=posicion.coords.latitude;
    longitud=posicion.coords.longitude;

    Ubicacion= new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      map:map
    });

    map.setZoom(18);
    map.setCenter({lat:latitud, lng:longitud});
  }
}
