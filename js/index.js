  let soundControls = $('.sound_btn'),
      btnPrev = $('.fa-angle-left'),
      btnAfter = $('.fa-angle-right'),
      slideNum = 0,
      sliderIdx = $('.slide_container li').length,
      fullPageIdx = 0,
      scrollCnt = 0;




  
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        //console.log(origin.index,destination.index);
      fullPageIdx = destination.index;    
      if(destination.index == 0){
      
        $('.header').removeClass('active light');
      } else if (destination.index == 1) {

          $('.header').addClass('active light');
      } else if (destination.index == 2) {
      
      } else if (destination.index == 3) {
        $('.header').removeClass('active light');
        
        var data = false;
        $('.led_imgs li').removeClass();
        if (scrollCnt == 0) {
          console.log('scroll');
          scrollCnt ++;
          $('.led_imgs li').addClass('img_md');
        } else if (scrollCnt == 1) {
          console.log('scroll1111');
          $('.led_imgs li').addClass('img_sm');
          scrollCnt ++;
        } else if (scrollCnt == 2) {
          console.log('scrol22222');
          $('.led_imgs li').addClass('img_sm');
          $('.led_ct').show().css('left', 11+'%');
          scrollCnt ++;
        } else {
          console.log('scroll3333');
          $('.led_imgs li').addClass('img_lg');
          $('.led_ct').css('left', '-'+ 500 +'%');
          data = true;
          scrollCnt = 0;
        }
        return data;
      } else if (destination.index == 4) {
        $('.header').addClass('active light');

        var bespoke = false;
        $('.bespoke_ct').css('left', '-'+ 700 +'%'); 
        if (scrollCnt == 0) {
          $('.bespoke_ct').css('left', '0px');
          $('.header').removeClass('light');
          scrollCnt ++;
        }else{
          bespoke = true;
          scrollCnt = 0; 
        }
        return bespoke;

      } else if (destination.index == 5) {
        $('.header').addClass('active light');
         
      }
	}
});


/* HEADER - SUB NAVIGATION  */


$('.sub_category_wrap').hide();
$('.touch_link > a').hover(
  function(){
    $(this).parent().find('.sub_category_wrap').stop().slideDown(400);
    $('.header').addClass('light');
    $('.header_inner').css('background', '#fff');
  },
  function(){

    $(this).parent().find('.sub_category_wrap').stop().slideUp(400);
    $('.header_inner').css('background', '');
    if(!$('.header').hasClass('active')){
      

      $('.header').removeClass('light');
    }

  }
);




/*
$('.sub_category_wrap').hide();
$('.touch_link > a').hover(
  function(){
    $(this).parent().find('.sub_category_wrap').stop().slideDown(400);
    $('.header_inner').css('background-color','#fff');
    $('.pc_nav > ul > li > a').css('color','black');
    $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
    $('.menu_icon_wrap > li').css('filter','none');
  },
  function(){
    $(this).parent().find('.sub_category_wrap').stop().slideUp(400);
    $('.header_inner').css('background-color','');
    $('.pc_nav > ul > li > a').css('color','');
    $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
    $('.menu_icon_wrap > li').css('filter','');
  }
);
*/


/*
$('.sub_category_wrap').hide();
$('.touch_link > a').hover(
  function() {
    $(this).parent().find('.sub_category_wrap').stop().slideDown(400);
    dropDownMenu('down');
  },
  function() {
    $(this).parent().find('.sub_category_wrap').stop().slideUp(400);
    if (fullPageIdx == 0 || fullPageIdx == 3) {
      dropDownMenu('up');
    } else {
      dropDownMenu();
    }
  }
);

function dropDownMenu(param) {
  if (param == 'down') {
    $('.header .header_inner').css('background-color','white').stop().slideDown(400);
    $('.menu_list > a').css('color','black').stop().slideDown(400);
    $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
    $('.header .menu_icon_wrap > li').css('fileter','invert(100%) sepia(0%) saturate(7475%) hue-rotate(72deg) brightness(108%) contrast(108%)').stop().slideDown(400);
  } else if (param == 'up') {

    $('.header .header_inner').css('background-color','transparent').stop().slideDown(400);
    $('.menu_list > a').css('color','').stop().slideDown(400);
    $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
  } else {
    $('.header .header_inner').css('background-color','transparent').stop().slideDown(400);
  }
}

$('.header .header_inner').hover(
  function(){
    console.log("33333");
    $(this).css('background-color','white').stop().slideDown(400);
    $('.menu_list > a').css('color','black').stop().slideDown(400);
    //$('.header_inner > a ').attr({src:'samsung-logo.png'}).stop().slideDown(400);
    //$('.header .menu_icon_wrap > li').css('fileter','invert(100%) sepia(0%) saturate(7475%) hue-rotate(72deg) brightness(108%) contrast(108%)').stop().slideDown(400);
    //$('.header_inne.header > .logo > .logo_img').setAttribute('src','');
    //$('.header .logo .logo_img_black').removeClass('logo_img').addClass("logo_img_black");
  },
  function(){
    console.log("44444");
    $(this).css('background-color','transparent').stop().slideDown(400);
    $('.menu_list > a').css('color','').stop().slideDown(400);
  }
);





/* SECTION01 - MAIN */


  
// slide prev버튼
btnPrev.click(function() {
  if(slideNum != 0){
    moveSlide(slideNum-1);
  }else{
    moveSlide(sliderIdx-1);
  }
});

// slide after버튼
btnAfter.click(function() {
  if(slideNum != sliderIdx -1){
      moveSlide(slideNum+1);
  }else{
      moveSlide(0);
  }
});


//슬라이드 이동 함수
function moveSlide(num){
  var vLeft = num*-100+'%';
  $('.slide_container').css('left', vLeft);
  slideNum = num;
  $('.current').text(slideNum+1);

  if(slideNum > 0){
    soundControls.css('visibility', 'hidden')
    $('.auto_btn').css('visibility', 'hidden')
    //$('.slide_paging button .fa-solid').css('color', '#202020')
    $('.colorcg').css('color', '#202020')
    $('.total').addClass('changed')
    $('.barcg').addClass('changed')

  }else{
    soundControls.css('visibility', '')
    $('.auto_btn').css('visibility', '')
    $('.colorcg').css('color', '')
    $('.total').removeClass('changed')
  }
}


soundControls.click(function(){
  var vid = document.getElementById('player');
  if($(this).hasClass('icon_sound')){
    vid.muted = false;
    $(this).removeClass('icon_sound').addClass('icon_sound_on');
  } else {
    vid.muted = true;
    $(this).removeClass('icon_sound_on').addClass('icon_sound');
  }
});


function playBtn() {
  var player = document.getElementById('player');
  if (player.paused) {
      player.play();
      $('.auto_btn').removeClass('fa-play').addClass('fa-pause');
  }else{
      player.pause();
      $('.auto_btn').removeClass('fa-pause').addClass('fa-play');
      //player.currentTime = 0
  }
}








/* SECTION02 -GALAXY */
function moveTab(param)  {
  $('.swiper_ct').children().removeClass('on');
  
  if (param == 0) {
    $('.swiper-wrapper').css('left', '0%');
    $('.swiper_ct').children().eq(param).addClass('on');
  } else if (param == 1) {
    $('.swiper-wrapper').css('left', '-100%');
    $('.swiper_ct').children().eq(param).addClass('on');
  } else if (param == 2) {
    $('.swiper-wrapper').css('left', '-200%');
    $('.swiper_ct').children().eq(param).addClass('on');
  } else if (param == 3) {
    $('.swiper-wrapper').css('left', '-300%');
    $('.swiper_ct').children().eq(param).addClass('on');
  }
}






/* SECTION04 - BESPOKE */


$(function(){
  $(".bespoke_img li:eq(0)").nextAll().hide();
  $(".color_btn a").click(function(e){
      var index = $(this).index();
      $(".bespoke_img li").eq(index).show().siblings().hide();
  });
});





  //fp-auto-height : footer 부분의 영역에 마지막 컨테츠 높이만큼만 쓸수 있도록
  //https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B5%AC%EC%97%AD%EC%9D%84-%EB%8D%94-%EC%9E%91%EA%B2%8C-%EB%98%90%EB%8A%94-%ED%81%AC%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0