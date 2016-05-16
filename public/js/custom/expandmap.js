var expandMap = (function($){
  var expandTrigger = $('.js-expand__icon');
  var isExpanded = false;
  var mapContainer = $('.js-map');
  var mapWrapper = $('map-wrapper');
  var setContainerFluid = function(target) {
    $(target).removeClass('container');
    $(target).addClass('container-fluid');
  };
  var setContainer = function(target) {
    $(target).removeClass('container-fluid');
    $(target).addClass('container');
  };
  var calculateOffset = function(target) {
    var targetTop = $(target).offset().top;
    return targetTop;
  };
  var setOffset = function(offsetValue) {
    $('body').scrollTop(offsetValue);
  };
  return {
    toggleExpand: function(target){
      $(target).on('click', function(){
        if(!isExpanded) {
          $(mapContainer).addClass('map--expanded');
          $('body').addClass('body--no-scroll');
          setContainerFluid(mapWrapper);
          setOffset(calculateOffset(mapContainer));
          isExpanded = true;
        } else {
          $(mapContainer).removeClass('map--expanded');
          $('body').removeClass('body--no-scroll');
          setContainer(mapWrapper);
          isExpanded = false;
        }
      });
    }
  };
})(jQuery);

expandMap.toggleExpand('.js-expand__icon');
