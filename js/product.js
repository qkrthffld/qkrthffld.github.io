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


/* HEART BUTTON */

$('.fa-heart').click(function(e){
  e.preventDefault();
    $(this).toggleClass('fa-solid');
    $(this).css('color', '#ff4d4d');

    if ($(this).hasClass('fa-solid') == false) {
      $(this).css('color', '#000');
    }
});


/* PRODUCT COLOR BUTTON */
/*
$('.color_btn button').click(function(){
  $(this).each(function(){
    $(this).addClass('active');
    console.log('active');
  });
});
*/

//$(".pd_images a:eq(0)").nextAll().hide();
  $(".color_btn button").click(function(e){
    var index = $(this).index();

    // 선택자 형제들만 remove
    $(this).siblings().removeClass('active');
    
    // 선택자만 add
    $(this).addClass('active');  
    $(this).parents().prev().children().eq(index).show().siblings().hide();
    //$(".pd_images a").eq(index).show().siblings().hide();

      //$('.color_btn a').removeClass('black_btn_border gold_btn_border warm_btn_border brown_btn_border gray_btn_border');
  });




  /* ACCORDION */
  
  
  $( "#aside" ).accordion({
    collapsible: true,
    heightStyle: "content",
    active: false
  });
  



   $('.fa-solid').click(function(){
     //e.preventDefault();
     
     if ($(this).hasClass('fa-plus')) {
       $(this).removeClass('fa-plus');
       $(this).addClass('fa-minus');
     } else {
       $(this).removeClass('fa-minus');
       $(this).addClass('fa-plus');
     }
 
   });


  /* PRICE SLIDER */


  // let blueRang= $('.range_box .slider_rang_control')
   $( function() {
    $( ".slider_rang_control" ).slider({
      range: "min",
      value: 94,
      min: 11,
      max: 94,
      slide: function( event, ui ) {
        $( "#max-range").val(ui.value + "만원" );
        $(this).slider().val(ui.value[1]);
        
      },

    });
    $( ".range_price" ).val($("#max-range" ).slider( "value" ) + "만원" );
  } );
 

 
 



 
