var showOverlay = (function($) {
  var overlay = $('.overlay');
  var searchSetFocus = function() {
    $('.js-search-input').focus();
  };
  return {
    searchActivate: function(target) {
      $(target).on('click', function(e){
        e.preventDefault();
        $(overlay).addClass('overlay--active');
        $('body').addClass('body--no-scroll');
        searchSetFocus();
      });
    },
    searchClose: function(target) {
      $(target).on('click', function(e) {
        e.preventDefault();
        $(overlay).removeClass('overlay--active');
        $('body').removeClass('body--no-scroll');
      });
    }
  };
})(jQuery);

showOverlay.searchActivate('.js-hero__search-trigger');
showOverlay.searchActivate('.js-header-search__link');
showOverlay.searchClose('.js-overlay-close__link');

var searchInput = (function($){
  var searchInput = $('.js-search-input');
  var searchWrapper = $('.search');
  var makeSearchActive = function(){
    if(searchInput.val().length > 2) {
      $('.search').addClass('search--active');
      $('.search-hint').addClass('search-hint--hidden');
    } else {
      $('.search').removeClass('search--active');
      $('.search-hint').removeClass('search-hint--hidden');
    }
  };
  return {
    startedTyping: function(){
      $(searchInput).keydown(function() {
        makeSearchActive();
      });
    }
  };
})(jQuery);

searchInput.startedTyping();
