  let soundControls = $('.sound_btn'),
      btnPrev = $('.fa-angle-left'),
      btnAfter = $('.fa-angle-right'),
      slideNum = 0,
      sliderIdx = $('.slide_container li').length,
      fullPageIdx = 0;





  
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        var origin = this;
        if (direction == 'down') {
            origin.index = origin.index + 1; 
        } else if (direction == 'up') {
            origin.index = origin.index - 1;
        }

    fullPageIdx = origin.index;    
		if(origin.index == 0){
      $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
      $('.header .touch_link > a').css('color', '#fff');
      $('.header .blank_link > a').css('color', '#fff');
      $('.header .menu_icon_wrap li').css('filter','');
		} else if (origin.index == 1) {
        $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
        $('.header .touch_link > a').css('color', 'black');
        $('.header .blank_link > a').css('color', 'black');
        $('.header .menu_icon_wrap li').css('filter', 'none');
    } else if (origin.index == 2) {
        $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
        $('.header .touch_link > a').css('color', 'black');
        $('.header .blank_link > a').css('color', 'black');
        $('.header .menu_icon_wrap li').css('filter', 'none');
    } else if (origin.index == 3) {
        $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
        $('.header .touch_link > a').css('color', '#fff');
        $('.header .blank_link > a').css('color', '#fff');
        $('.header .menu_icon_wrap li').css('filter','');
    } else if (origin.index == 4) {
        $('.header_inner').css('background', 'none');
        $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
        $('.header .touch_link > a').css('color', 'black');
        $('.header .blank_link > a').css('color', 'black');
        $('.header .menu_icon_wrap li').css('filter', 'none');
    } else if (origin.index == 5) {
        $('.header_inner').css('background', '#fff');
        $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
        $('.header .touch_link > a').css('color', 'black');
        $('.header .blank_link > a').css('color', 'black');
        $('.header .menu_icon_wrap li').css('filter', 'none');
    }


	}
});


/* HEADER - SUB NAVIGATION  */

// let mbtn= $('.touch_link > a'),
//     // mNav= $('.menu_list_wrap'),
//     sNav= $('.sub_category_wrap');

/*
$('.touch_link > a').mouseenter(function(){
  let menu_i = $(this).index();
      

  if(menu_i < 5){
    $('.sub_category_wrap').css({
      display:'none'
    }).eq($(this).index()).css({
      display:'block'
    })
  }
});
$('.touch_link > a').mouseleave(function(){
  let menu_i = $(this).index();

  if(menu_i < 5){
    $('.sub_category_wrap').css({
      display:'none'

    })
  }
});
*/



// $(function(){
//   $('.sub_category_wrap').hide();
//   $('.touch_link > a').hover(function(){
//     $(this).parent().find('.sub_category_wrap').slideDown();
//     $(this).parent().hover(function(){ 
//     }),function(){
//     $(this).parent().find('.sub_category_wrap').slideUp(); 
//     }
//   });
// });


$('.sub_category_wrap').hide();
$('.touch_link > a').hover(
  function(){
    $('.sub_category_wrap').stop().slideDown(400);
    $('.header_inner').css('background-color','#fff');
    $('.pc_nav > ul > li > a').css('color','black');
    $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
    $('.menu_icon_wrap > li').css('filter','none');
  },
  function(){
    $('.sub_category_wrap').stop().slideUp(400);
    $('.header_inner').css('background-color','');
    $('.pc_nav > ul > li > a').css('color','');
    $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
    $('.menu_icon_wrap > li').css('filter','');
  }
);


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



/*
$('.sub_category_wrap').hover(
  function(){
    $(this).parent().find('.sub_category_wrap').stop().slideDown(400);
  },
  function(){
    $(this).parent().find('.sub_category_wrap').stop().slideUp(400);
  }
);
*/



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




/*
$('.controls').click(function(){
  $(this).toggleClass('active');
  if($(this).hasClass('active')){
    $('.video').get(0).play();
  }else{
    $('.video').get(0).pause();
  }
});
*/



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



/*
function changeImg(bespoke){
  if ($('.bespoke_img') == 0 ).hid

  if (bespoke == 0) {
    origin.index = origin.index + 1; 
  } else if (direction == 'up') {
      origin.index = origin.index - 1;
  }

}
*/
  


/*
var tabs = document.querySelector('.swiper-tabs-nav .swiper-wrapper');

var tabButtons = new Swiper('.swiper-tabs-nav', {
  slidesPerView: 'auto',
  freeMode: true,
  // scrollbar: '.swiper-scrollbar',
  mousewheelControl: true,
  onTap: function(swiper, event) {
    if ( event.target.classList.contains('swiper-slide') && !event.target.classList.contains('.on') ) {
      event.target.parentElement.querySelector('.on').classList.remove('.on');
      event.target.classList.add('.on');
      tabContent.slideTo(swiper.clickedIndex);
    }
  }
});

var tabContent = new Swiper('.swiper-container', {
  onSlideChangeStart: function(swiper, event) {
    tabs.children[swiper.previousIndex].classList.remove('active');
    tabs.children[swiper.activeIndex].classList.add('active');
  }
});
*/








// $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 100) {
//       $(".header_inner").css("color" , "#202020");
//     }
//     else{
//       $(".header_inner").css("color" , "#202020");   
//     }
//   })

/*
$(function(){
    var $header = $('.header'); //헤더를 변수에 넣기
    var $page = $('.header_inner'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
  });
  */