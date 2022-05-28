
 $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        var origin = this;
        console.log("origin :", origin.index);
        console.log("direction :", direction);
        if (direction == 'down') {
            origin.index = origin.index + 1; 
        } else if (direction == 'up') {
            origin.index = origin.index - 1;
        }

		if(origin.index == 0){
			console.log("0번째");
            $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
            $('.header .touch_link > a').css('color', '#fff');
            $('.header .blank_link > a').css('color', '#fff');
            $('.header .menu_icon_wrap li').css('filter','');
		} else if (origin.index == 1) {
            console.log("1번째");
            $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
            $('.header .touch_link > a').css('color', 'black');
            $('.header .blank_link > a').css('color', 'black');
            $('.header .menu_icon_wrap li').css('filter', 'none');
        } else if (origin.index == 2) {
            console.log("2번째");
            $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
            $('.header .touch_link > a').css('color', 'black');
            $('.header .blank_link > a').css('color', 'black');
            $('.header .menu_icon_wrap li').css('filter', 'none');
        } else if (origin.index == 3) {
            console.log("3번째");
            $('.header .logo .logo_img_black').removeClass('logo_img_black').addClass("logo_img");
            $('.header .touch_link > a').css('color', '#fff');
            $('.header .blank_link > a').css('color', '#fff');
            $('.header .menu_icon_wrap li').css('filter','');
        } else if (origin.index == 4) {
            console.log("4번째");
            $('.header_inner').css('background', 'none');
            $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
            $('.header .touch_link > a').css('color', 'black');
            $('.header .blank_link > a').css('color', 'black');
            $('.header .menu_icon_wrap li').css('filter', 'none');
        } else if (origin.index == 5) {
            console.log("5번째");
            $('.header_inner').css('background', '#fff');
            $('.header .logo .logo_img').removeClass('logo_img').addClass("logo_img_black");
            $('.header .touch_link > a').css('color', 'black');
            $('.header .blank_link > a').css('color', 'black');
            $('.header .menu_icon_wrap li').css('filter', 'none');
        }
	}
});



/* SECTION02 -GALAXY */


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