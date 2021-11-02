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


  $('#default').click(function(){
    $('.short').show(),
    $('.bob').show(),
    $('.medium').show();
    $('.semi').show();
    $('.long').show();
  })

  $('.short-tab').click(function(){
    $('.short').show(),
    $('.bob').hide(),
    $('.medium').hide();
    $('.semi').hide();
    $('.long').hide();
  })

  $('.bob-tab').click(function(){
    $('.short').hide(),
    $('.bob').show(),
    $('.medium').hide();
    $('.semi').hide();
    $('.long').hide();
  })

  $('.medium-tab').click(function(){
    $('.short').hide(),
    $('.bob').hide(),
    $('.medium').show();
    $('.semi').hide();
    $('.long').hide();
  })

  $('.semi-tab').click(function(){
    $('.short').hide(),
    $('.bob').hide(),
    $('.medium').hide();
    $('.semi').show();
    $('.long').hide();
  })

  $('.long-tab').click(function(){
    $('.short').hide(),
    $('.bob').hide(),
    $('.medium').hide();
    $('.semi').hide();
    $('.long').show();
  })


  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
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