(function ($) {
  "use strict";

  $(window).on("load", function () {
    jQuery(".preloader").fadeOut(500);
  });

  new WOW().init();
})(jQuery);
