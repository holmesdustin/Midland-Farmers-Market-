var myLatlng = new google.maps.LatLng(32.577408, -84.829156);
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: 'roadmap'
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);