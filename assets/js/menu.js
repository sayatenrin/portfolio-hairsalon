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

  $('.tab').click(function(){
    $(this).next().slideToggle();
    $(this).find('i').toggleClass('fa-rotate-90');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('.back-to-top').fadeIn('slow');
    } else{
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('body,html').animate({scrollTop:0},600);
  });



});