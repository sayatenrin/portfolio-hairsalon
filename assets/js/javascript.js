$(function(){

  $('#open').click(function(){
    $('nav').css('width','100%');
  });

  $('#close').click(function(){
    $('nav').css('width','0');
  });

  $('nav').click(function(){
    $('nav').css('width','0');
  });

  
  $(window).scroll(function(){
    

    $('.about-wrapper').each(function(){
      var elemPos = $(this).offset().top;
      var tt = $(window).scrollTop();
      var hh = $(window).height();    
      if(tt > elemPos - hh){
        $(this).addClass('effect-scroll');
      }
    });

    $('.movie-wrapper').each(function(){
      var elemPos = $(this).offset().top;
      var tt = $(window).scrollTop();
      var hh = $(window).height();    
      if(tt > elemPos - hh){
        $(this).addClass('effect-scroll');
      }
    });

    $('.card').each(function(){
      var elemPos = $(this).offset().top;
      var tt = $(window).scrollTop();
      var hh = $(window).height();    
      if(tt > elemPos - hh){
        $(this).addClass('effect-scroll');
      }
    });


    var check = window.pageYOffset;
    var docHeight = $(document).height();
    var dispHeight = $(window).height(); 

    if(check > docHeight - dispHeight -60){
      $('#reserve').fadeOut('slow');
    }else{
      $('#reserve').fadeIn('slow');
    }
    
  });
 




  $('.about').click(function(){
    $('.about-text').toggle();
  });

  $('.down-btn').click(function(){
    $(this).prev('.card-text').slideToggle(),
    $(this).toggleClass('fa-rotate-180');
  });
  


  $(window).scroll(function(){
    if($(this).scrollTop() > 600){
      $('.back-to-top').fadeIn('slow');
    } else{
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('body,html').animate({scrollTop:0},600);
  });
  

});