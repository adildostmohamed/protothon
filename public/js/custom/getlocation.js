var getLocation = (function($){
  var getAddress = function(position){
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.ajax({
      type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
      url: 'https://api.postcodes.io/postcodes?lon=' + longitude + '&lat='+ latitude, // the postcodes.io endpoint to get an address from lat-long
      dataType: 'json', // what type of data do we expect back from the server
      encode: true,
      error: function(jqXHR, textStatus, errorThrown) {
          console.log('jqXHR:');
          console.log(jqXHR);
          console.log('textStatus:');
          console.log(textStatus);
          console.log('errorThrown:');
          console.log(errorThrown);
      },
      success: function(data, textStatus, jqXHR) {
        console.log(data);
        $('#updates-address-input').val(data.result[0].postcode)
      }
    });
  }
  return {
    checkLocation: function(){
      if ("geolocation" in navigator) {
        $('.js-updates-postcode__button').click(function(e){
          e.preventDefault();
          navigator.geolocation.getCurrentPosition(getAddress);
      });
      } else {
        /* geolocation IS NOT available */
        console.log('Its not');
      }
    }
  };
})(jQuery);

getLocation.checkLocation();
