$(document).ready(function(){

    // set owl-carousel width equals to owl-wrapper width
    function owlWrapperWidth( selector ) {
        $(selector).each(function(){
          $(this).find('.owl-carousel').outerWidth( $(this).closest( selector ).innerWidth() );
        });
      }
  
      // trigger on start and resize
      owlWrapperWidth( '.owl-wrapper' );
      $( window ).resize(function() {
        owlWrapperWidth( $('.owl-wrapper') );
      });  
    
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:true,
        navText:["<img src='images/prev.png'>","<img src='images/next.png'>"],
        // autoplay:true,
        // smartSpeed:1500,
        // autoplayHoverPause:true,

    });
});
