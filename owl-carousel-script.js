jQuery(document).ready(function ($) {
  $("#owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  });
});
