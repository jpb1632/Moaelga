(function() {
  $(function() {
    $(".properties-N5[id=\'mbmLw6KE2H\']").each(function() {
      const blockSelector = ".properties-N5[id='mbmLw6KE2H']";
      new Swiper(blockSelector + " .premium-swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 700,
        autoplay: {
          delay: 4200,
          disableOnInteraction: false
        },
        pagination: {
          el: blockSelector + " .swiper-pagination",
          clickable: true
        }
      });
    });
  });
})();
