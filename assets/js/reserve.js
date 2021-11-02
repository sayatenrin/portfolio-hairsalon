$(function(){

  $('#open').click(function(){
    $('nav').css('width','100%')
  });

  $('#nav-close').click(function(){
    $('nav').css('width',0)
  });

  $('nav').click(function(){
    $('nav').css('width','0');
  });



  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.cut-tab').click(function(){
    $('.cut').slideToggle();
    $(this).find('i').toggleClass('fa-rotate-90');
  });

  $('.color-tab').click(function(){
    $('.color').slideToggle();
    $(this).find('i').toggleClass('fa-rotate-90');
  });

  $('.perm-tab').click(function(){
    $('.perm').slideToggle();
    $(this).find('i').toggleClass('fa-rotate-90');
  });

  $('.other-tab').click(function(){
    $('.other').slideToggle();
    $(this).find('i').toggleClass('fa-rotate-90');
  });

  
  

  $('.menu').click(function(){
    var selectMenu = $(this).text();   
    $('.select-menu').append('<p>' + selectMenu + '<span> &times; </span></p>');

    $('.select-menu p span').click(function(){
      $(this).parent().remove();
    });

  });

  $('#confirm-btn').click(function(){
    $('.confirm').css({
      height: '100%',
      opacity : '1'});

      reserveDisplay();
      
  });

  function reserveDisplay(){
      var Rdate = $('#date').val();
     var Rtime = $('#time').val();

     var Rfirstname = $('#firstname').val();
     var Rlastname = $('#lastname').val();
     var Rtel = $('#tel').val();
     var Remail = $('#email').val();
      

     $('.date').val(Rdate);
     $('.time').val(Rtime);

     $('.firstname').val(Rfirstname);
     $('.lastname').val(Rlastname);
     $('.tel').val(Rtel);
     $('.mail').val(Remail);
  };
  



 $('#confirm-close').click(function(){
  $('.confirm').css({
    height: '0',
    opacity : '0'});
  });

   $('#submit').click(function(){
    $('.confirm').css({
      height: '0',
      opacity : '0'});
     alert('Thank you for resevetion!');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('#back-to-top').fadeIn('slow');
    } else{
      $('#back-to-top').fadeOut('slow');
    }
  });

  $('#back-to-top').click(function(){
    $('body,html').animate({scrollTop:0},600);
  });

});