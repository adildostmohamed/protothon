//initialise a google map
function initMap() {

  //set a default center point for the map to center on
  var defaultCenter = {lat: -25.363, lng: 131.044};

  //create a map and pass in some basic parameters
  var map = new google.maps.Map(document.getElementsByClassName('js-map')[0], {
    center: defaultCenter,
    zoom: 12
  });

  //create a marker to identify the position
  var marker = new google.maps.Marker({
    position: defaultCenter,
    map: map,
    title: 'Hello World!',
    data: {
      a: 'This is updating the template',
      b: 'This looks ok'
    }
  });

  // Try HTML5 geolocation to get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marker.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }

  //add a custom function to the marker to trigger a function returned from an iife
  marker.addListener('click', function() {
    // issue.setContent(marker.data);
    issue.openModal(marker.data.a);
  });

}

function handleLocationError(browserHasGeolocation, marker, pos) {
  marker.setPosition(pos);
  marker.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
}
