$(function(){

  $('#open').click(function(){
    $('nav').css('width','100%')
  });

  $('#close').click(function(){
    $('nav').css('width',0)
  });

  $('nav').click(function(){
    $('nav').css('width','0');
  });

  $('.question').click(function(){    
    
    // $('.answer').not($(this).next('.answer')).slideUp();
    $(this).next('.answer').slideToggle();

    $(this).find('i').toggleClass('fa-rotate-90');    

  });

  $('#submit').click(function(){
    alert('Thank you for your inquiry.')
  })


});