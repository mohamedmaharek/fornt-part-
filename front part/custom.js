
// scrool to top buttom

$(function() {

    $(window).on("scroll", function(){

       if($(window).scrollTop() >=500){

        $(".scroll-to-top").fadeIn();
       }else{
        $(".scroll-to-top").fadeOut();
       }
    });
    $(".scroll-to-top").on("click", function(e){
      e.preventDefault();
      $("html,body").animate({
        scrollTop : 0
      }, 500)
    });
  });

// end buttom
