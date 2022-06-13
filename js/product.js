/* HEADER NAVIGATION */

$('.sub_category_wrap').hide();
$('.touch_link > a').mouseover(function(){  
  $('.sub_category_wrap').hide();
  $(this).parent().find('.sub_category_wrap').stop().slideDown(200);
  //$('.header').addClass('light');
  $('.header_inner').css('background', '#fff');
});
$('.sub_category_wrap').mouseleave(function(){
  $(this).stop().slideUp(200);
  $('.header_inner').css('background', '');
//   if(!$('.header').hasClass('active')){
//     $('.header').removeClass('light');
//   }
});


/* HEADER SHADOW */

let fixed = $('.fixed_wrap');
$(window).scroll(function(e){
    if(fixed.offset().top !== 0){
        if(!fixed.hasClass('shadow')){
            fixed.addClass('shadow');
        }
    }else{
        fixed.removeClass('shadow');
    }
});