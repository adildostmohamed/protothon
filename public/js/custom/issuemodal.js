var issue = (function($){
  return {
    showText: function(data){
      console.log(data);
    },
    openModal: function(content) {
      $('#map-issue').modal('show');
      $('#map-issue').on('shown.bs.modal', function (e) {
        $('.js-modal-body').text(content);
      });
    }
    // setContent: function(content) {
    //
    // }
  };
})(jQuery);

issue
