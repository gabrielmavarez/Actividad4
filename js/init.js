(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    $(document).ready(function(){
      $('.materialbox').materialbox();
      
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
