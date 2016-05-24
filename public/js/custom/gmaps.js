//initialise a google map
function initMap() {

  //set a default center point for the map to center on
  var defaultCenter = {lat: 51.498514, lng: -0.099778};

  //create a map and pass in some basic parameters
  var map = new google.maps.Map(document.getElementsByClassName('js-map')[0], {
    center: defaultCenter,
    zoom: 16
  });

  //create a marker to identify the position
  var markerCurrent = new google.maps.Marker({
    position: defaultCenter,
    map: map,
    icon: '/images/unplanned.png'
  });

  var resolvedA = new google.maps.Marker({
    position: {lat: 51.498357, lng: -0.084066},
    map: map,
    icon: '/images/resolved.png'
  });

  var resolvedB = new google.maps.Marker({
    position: {lat: 51.503706, lng: -0.098748},
    map: map,
    icon: '/images/resolved.png'
  });

  var plannedA = new google.maps.Marker({
    position: {lat: 51.469134, lng: -0.145397},
    map: map,
    icon: '/images/planned.png'
  });

  var plannedB = new google.maps.Marker({
    position: {lat: 51.517229, lng: -0.009785},
    map: map,
    icon: '/images/planned.png'
  });

  var plannedC = new google.maps.Marker({
    position: {lat: 51.530686, lng: -0.084972},
    map: map,
    icon: '/images/planned.png'
  });

  var unplannedA = new google.maps.Marker({
    position: {lat: 51.472556, lng: -0.040684},
    map: map,
    icon: '/images/unplanned.png'
  });

  var unplannedB = new google.maps.Marker({
    position: {lat: 51.503126, lng: -0.141964},
    map: map,
    icon: '/images/unplanned.png'
  });

  // Try HTML5 geolocation to get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      markerCurrent.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, markerCurrent, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, markerCurrent, map.getCenter());
  }

  //add a custom function to the marker to trigger a function returned from an iife
  // markerCurrent.addListener('click', function() {
  //   // issue.setContent(marker.data);
  //   issue.openModal(marker.data.a);
  // });

}

function handleLocationError(browserHasGeolocation, marker, pos) {
  marker.setPosition(pos);
  marker.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
}
