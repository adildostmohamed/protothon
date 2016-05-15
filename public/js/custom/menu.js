var showMenu = (function($){
  var mainWrapper = $('.js-page-wrapper');
  var menuTrigger = $('.js-header-menu__link');
  var mainNav = $('.js-main-nav');
  var isMenuActive = false;
  return {
    activateMenu: function(){
      $(menuTrigger).on('click', function(e){
        if(isMenuActive !== true) {
          e.preventDefault();
          $(mainWrapper).addClass('page-wrapper--active');
          $(mainNav).addClass('main-nav--active');
          $('body').addClass('body--no-scroll');
          isMenuActive = true;
          console.log(isMenuActive);
        } else {
          console.log(isMenuActive);
          e.preventDefault();
          $(mainWrapper).removeClass('page-wrapper--active');
          $(mainNav).removeClass('main-nav--active');
          $('body').removeClass('body--no-scroll');
          isMenuActive = false;
        }
      });
    }
  };
})(jQuery);

showMenu.activateMenu();
