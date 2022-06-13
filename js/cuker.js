/* 자동 롤링 배너 */

window.onload = function(){
  let bannerLeft = 0;
  let spanCnt = 0;
  let last;
  let first = 1;
  let $last;
  let $first; 


  $('.menu_links > span').each(function(){
    $(this).css('left', bannerLeft);
      bannerLeft += $(this).width()+24;
      $(this).attr('id', 'banner'+(++spanCnt));
  });

  if( spanCnt >= 10){
      last = spanCnt;
      setInterval(function(){
        $('.menu_links > span').each(function(){
          $(this).css('left', $(this).position().left-1);
        });

        $first = $('#banner'+ first);
        $last = $('#banner'+ last);
        if($first.position().left < -400){
            $first.css('left', $last.position().left + $last.width()+24 );
            first++;
            last++;
            if(last > spanCnt) {last = 1;}
            if(first > spanCnt) {first = 1;}
        }
      }, 10);

  }

};




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

