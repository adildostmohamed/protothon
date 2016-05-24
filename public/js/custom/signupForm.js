$(document).ready(function(){
  $('#signUpForm').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: 'http://52.30.226.234/twilioAlert.php', // the postcodes.io endpoint to get an address from lat-long
      // dataType: 'json', // what type of data do we expect back from the server
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
        window.location.href = "/confirmation"
      }
    });
  });
});
