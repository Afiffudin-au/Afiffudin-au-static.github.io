$(document).ready(function () {
  $('.page-scroll').on('click',function(){
    const tujuan = $(this).attr('href');
    $('html,body').animate({
      scrollTop : $(tujuan).offset().top-100
    });

    $(tujuan).addClass('fade');

    setTimeout(function(){
      $(tujuan).removeClass('fade');
    },500);
    console.log($(tujuan));
  });
});

$(window).on('load',function () {
  $('.navbar a').css({
    'color' : 'white'
  });
});
$(window).scroll(function(){
  const Wscroll = $(this).scrollTop();
  console.log(Wscroll);
  if(Wscroll>$('.jumbotron').offset().top){
    // console.log("jos1");
    $('.navbar a').css({
      'color': 'white'
    });
  }
  if(Wscroll>$('.jumbotron').offset().top+400){
    // console.log("jos");
    $('.navbar a').css({
      'color': '#76c0ff ',
      'text-shadow': '0 0 0 rgba(0, 0,0,0)'
    });
  }

  //Windows Resize Or Mobile Device Setting
  if(Wscroll>$('.jumbotron').offset().top){
    if ($(window).width() <= 576) {  
    $('.navbar').css({
      'position' : 'relative'
    });
    }   
  }
  if(Wscroll>$('.jumbotron').offset().top+350){
      console.log($('.jumbotron').offset().top+350);
      if ($(window).width() <= 576) {  
      $('.navbar').css({
        'position' : 'fixed'
      });
      }   
  }
 
});