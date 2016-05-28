var getLocation = (function($){
  var setLocactionHeader = function(content) {
    $('.js-header-location__text-set').text(content);
  };
  var showPrompt = function(content) {
    $('.js-page-alert-postcode').text(content.result[0].postcode + ' and ' + content.result[1].postcode + '.');
    $('.js-page-alert').addClass('page-alert--active');
    $('.js-page-alert__text-wrapper').addClass('page-alert__text-wrapper--active');
  };
  var setUpdatesLocation = function(content) {
    $('.js-updates-location').text('in ' + content);
  };
  var setLiveReportPostcode = function(content) {
    $('.js-live-report-status__header').text(content.result[0].postcode);
  }
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
        var postcodeInfo = data;
        setLocactionHeader(postcodeInfo.result[0].admin_district);
        setUpdatesLocation(postcodeInfo.result[0].admin_district);
        showPrompt(postcodeInfo);
        setLiveReportPostcode(postcodeInfo);
        $('#updates-address-input').val(data.result[0].postcode);
      }
    });
  };
  return {
    checkLocation: function(){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(getAddress);
        // $('.js-updates-postcode__button').click(function(e){
        //   e.preventDefault();
        // });
      } else {
        /* geolocation IS NOT available */
        console.log('Its not');
      }
    }
  };
})(jQuery);

getLocation.checkLocation();
