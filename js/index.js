  let soundControls = $('.sound_btn'),
      btnPrev = $('.fa-angle-left'),
      btnAfter = $('.fa-angle-right'),
      slideNum = 0,
      sliderIdx = $('.slide_container li').length,
      fullPageIdx = 0,
      scrollCnt = 0,
      //navNum =0;
      prograssbar= $('.slide_progressbar');





  
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        //console.log(origin.index,destination.index);
      fullPageIdx = destination.index; 
       
      if(destination.index == 0){
        $('.header').css('background-color',''); 
        $('.header').removeClass('active light');
      } else if (destination.index == 1) {
        $('.header').css('background-color',''); 
        $('.header').addClass('active light');
      } else if (destination.index == 2) {
        $('.header').css('background-color',''); 
      } else if (destination.index == 3) {
        $('.header').removeClass('active light');
        $('.header').css('background-color',''); 

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
          $('.led_ct').show().css('left', 0);
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
        $('.fixed_wrap').css('background-color',''); 
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
        $('.header').css('background-color','white');
         
      }     
	}
});


/* HEADER - SUB NAVIGATION  */

/*
$('.sub_category_wrap').hide();
$('.header_inner a').hover(
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
*/
$('.sub_category_wrap').hide();
$('.touch_link > a').mouseover(function(){  
  $('.sub_category_wrap').hide();
  $(this).parent().find('.sub_category_wrap').stop().slideDown(200);
  $('.header').addClass('light');
  $('.header_inner').css('background', '#fff');
});
$('.sub_category_wrap').mouseleave(function(){
  $(this).stop().slideUp(200);
  $('.header_inner').css('background', '');
  if(!$('.header').hasClass('active')){
    $('.header').removeClass('light');
  }
});



/* MOBILE BAR CLICK */

function hamburger(){
  console.log("11111");
  $('.mobile_sub').show();
}  
// $('.hamburger').click(function(){
//   $('.mobile_sub').show();
// });

$('.fa-x').click(function(e){
  e.preventDefault();
  $('.mobile_sub').hide();
});


$('.two_depth').children('a').click(function(){

 // $(this).children('ul.fff').toggle();
 $(this).next().toggle();

  if( $(this).hasClass('.active ') == false) {
    $(this).addClass('.active ');
    $(this).find('i:eq(0)').hide();
    $(this).find('i:eq(1)').show();
  }else{
    $(this).removeClass('.active ');
    $(this).find('i:eq(0)').show();
    $(this).find('i:eq(1)').hide();
  }
});

// $('.mobile_sub_wrap > li > ul').click(function(){
//     $(this).children('li').toggle();
// });


// $('.two_depth').click(function(){
//   $(this).toggle();
// });

$('.two_depth > ul > li > a').click(function(){
  $(this).next().toggle();

  if( $(this).hasClass('sel') == false) {
    $(this).addClass('sel');
    $(this).find('i:eq(0)').hide();
    $(this).find('i:eq(1)').show();
  }else{
    $(this).removeClass('sel');
    $(this).find('i:eq(0)').show();
    $(this).find('i:eq(1)').hide();
  }

  //$(this).children('ul').toggle();
  //$('.mobile_sub_wrap > li > ul > li > .three_depth').toggle();
});





// $('.sub_category_wrap').mouseout(function(){
//   console.log('1111:', $(this).hasClass('useSubMenu'));
//   if ($(this).hasClass('useSubMenu')) {
//     $(this).stop().slideUp(200);
//     $(this).removeClass('useSubMenu');
//   }
  // if($(this).parent().find('.sub_category_wrap').stop().slideUp(200)){
  //   $(this).removeClass('useSubMenu');
  //  // $(this).parent().find('.sub_category_wrap').removeClass('useSubMenu');
  // }else(!$(this).hasClass('useSubMenu'));{
  //   $(this).parent().find('.sub_category_wrap').stop().slideUp(200);
  // }
// });



// $('.sub_category_wrap').mouseout(function(){
//   console.log('3333:');
//     if ($(this).hasClass('useSubMenu')) {
//       $(this).stop().slideUp(200);
//       $('.header_inner').css('background', '');
//       if(!$('.header').hasClass('active')){
//         $('.header').removeClass('light');
//       }
//       $(this).removeClass('useSubMenu');
//     }
  // if ($(this).css('display') == 'block') {
  //     $(this).stop().slideUp(200);
  //     $('.header_inner').css('background', '');
  //     if(!$('.header').hasClass('active')){
  //       $('.header').removeClass('light');
  //     }
  // }      
// });






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
  let newleft = num*33.3+'%';
  let vLeft = num*-100+'%';
  var player = document.getElementById('player');
  $('.slide_container').css('left', vLeft);
  slideNum = num;
  $('.current').text(slideNum+1);
  $('.header').removeClass('active light');

  
  if(slideNum > 0){
    soundControls.css('visibility', 'hidden');
    $('.auto_btn').css('visibility', 'hidden');
    //$('.slide_paging button .fa-solid').css('color', '#202020')
    $('.colorcg').css('color', '#202020');
    $('.total').addClass('changed');
    $('.header').addClass('active light');
    $('.slide_progressbar').css('background-color', 'rgba(0, 0, 0, 0.3)');
    //$('.slide_progressbar .fill').css('background-color', 'red');
    $('.slide_progressbar .fill').css('left' , newleft);
    $('.slide_progressbar .fill').css('background-color', '#202020');
    player.pause();
  }else{
    soundControls.css('visibility', '');
    $('.auto_btn').css('visibility', '');
    $('.colorcg').css('color', '');
    $('.total').removeClass('changed');
    $('.slide_progressbar').css('background-color', '');
    $('.slide_progressbar .fill').css('left', '');
    $('.slide_progressbar .fill').css('background-color', '');
    player.load();
    player.muted = true;
    soundControls.removeClass('icon_sound_on').addClass('icon_sound');
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

      $('.color_btn a').removeClass('black_btn_border gold_btn_border warm_btn_border brown_btn_border gray_btn_border');

      if(index == 0){
        $('.header').removeClass('active light');
        $('.black_btn').addClass('black_btn_border');
      }else if(index == 1){
        $('.header').addClass('active light');
        $('.gold_btn').addClass('gold_btn_border');
      }else if(index == 2){
        $('.header').addClass('active light');
        $('.warm_btn').addClass('warm_btn_border');
      }else if(index == 3){
        $('.header').removeClass('active light');
        $('.brown_btn').addClass('brown_btn_border');
      }else if(index == 4){
        $('.header').addClass('active light');
        $('.gray_btn').addClass('gray_btn_border');
      }
  });
});





  //fp-auto-height : footer 부분의 영역에 마지막 컨테츠 높이만큼만 쓸수 있도록
  //https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B5%AC%EC%97%AD%EC%9D%84-%EB%8D%94-%EC%9E%91%EA%B2%8C-%EB%98%90%EB%8A%94-%ED%81%AC%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0

  

  /* COUNTDOWN */

 
  CountDownTimer('01/01/2023', 'countdown');

  function CountDownTimer(dt, id)
  {
      var end = new Date(dt);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      function showRemaining() {
          var now = new Date();
          var distance = end - now;
          if (distance < 0) {

              clearInterval(timer);
              document.getElementById(id).innerHTML = 'EXPIRED!';

              return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          document.getElementById(id).innerHTML = days + '일 ';
          document.getElementById(id).innerHTML += hours + '시간 ';
          document.getElementById(id).innerHTML += minutes + '분 ';
          document.getElementById(id).innerHTML += seconds + '초';
      }

      timer = setInterval(showRemaining, 1000);
  }




  /* MODAL POPUP */
  
  // $('button').click(function(){
  //   $('.modal_box').css('display','none');
  // });



  /* COOKIE */

  let popup = document.querySelector('.modal_box');
  let popupCheckBox = document.querySelector('#nomore');
  let popupClose = popup.querySelector('#close');
        

      //쿠키 생성 함수
      function setCookie(name,value,day){

      let date = new Date();
      date.setDate(date.getDate() + day);

      let cookieContent = '';
      cookieContent += `${name}=${value};`;
      cookieContent += `Expires=${date.toUTCString()}`;            

      document.cookie = cookieContent;
      }

      //쿠키 삭제 함수
      function delCookie(name,value){            

        let date = new Date();
        date.setDate(date.getDate() - 1);

        let cookieContent = '';
        cookieContent += `${name}=${value};`;
        cookieContent += `Expires=${date.toUTCString()}`;            

        document.cookie = cookieContent;
        }
      

        /*
        쿠키체크
            쿠키 있다면 - 팝업이 안보인다.
            쿠키 없다면 - 팝업이 보인다.

        */

        //쿠키 확인 함수
        function getCookie(name){
            let visited = false;
            let cookies = document.cookie.split(';'); //문자열 ; 구분해서 배열 생성
            for(let cookie of cookies){
                if(cookie.indexOf(name) > -1){
                  visited = true;
                }
            }
            if(visited){
                popup.style.display = 'none'; //재방문
            }else{
                popup.style.display = 'block'; //첫방문, 안보기 체크안하고 닫기
            }
        }
        getCookie('ABC');


        /*
        닫기 버튼을 클릭하면 할일
            popupCheckBox.checked -> true, false
            하루안보기 체크하고 닫으면 - 쿠키지운다
            체크하고 닫으면 - 쿠키생성
        */
        popupClose.addEventListener('click',()=>{
            popup.style.display = 'none';
            if(popupCheckBox.checked){ //체크되었다면, 팝업을 다시 안보겠다, 쿠키생성
                setCookie('ABC','Main Page', 1);
            }else{ //체크x, 팝업을 다시 보겠다, 쿠키제거
                delCookie('ABC','Main Page');
            }
        });



        /* 풀페이지 끄기 */

        
        $(window).resize(function(){
          if($(this).width() <= 1024){
            fullpage_api.destroy('all');
            var data = false;
            $('.led_imgs li').removeClass();
            if (scrollCnt == 0) {
              console.log('scroll');
              scrollCnt ++;
              $('.led_imgs li').addClass('img_sm');
            } else if (scrollCnt == 1) {
              console.log('scroll1111');
              $('.led_imgs li').addClass('img_sm');
              scrollCnt ++;
            } else if (scrollCnt == 2) {
              console.log('scrol22222');
              $('.led_imgs li').addClass('img_sm');
              $('.led_ct').show().css('left', 0);
              scrollCnt ++;
            } else {
              console.log('scroll3333');
              $('.led_imgs li').addClass('img_lg');
              $('.led_ct').css('left', '-'+ 500 +'%');
              data = true;
              scrollCnt = 0;
            }


            //$('.bespoke_img').bxSlider();
            $('.bespoke_img > li').slick({
              slide: 'li',
              slidesToScroll : 1,
            });

            $(".accordion_change > ul").accordion({
              collapsible : true,      // 클릭시 모두 닫게 한다.
              active : true            // Boolean or Integer : true - 페이지 로딩시 모두 닫혀 있는 상태, 0일경우 첫번째 메뉴가 열려 있는 상태로 로딩
              });

          }else{
            fullpageActivate();
          }
      });
      $(window).trigger('resize');

      