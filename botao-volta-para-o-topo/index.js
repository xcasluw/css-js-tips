(function ($) {
  "use strict";
  var main_wind = $(window);

  main_wind.on("scroll", function () {
    var consultScroll = $(".botao_btt");
    if ($(this).scrollTop() > 500) {
      consultScroll.fadeIn();
      consultScroll.removeClass("invisivel");
    } else {
      consultScroll.fadeOut();
    }
  });

  var goScroll = $(".botao_btt");
  goScroll.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
})(jQuery);
