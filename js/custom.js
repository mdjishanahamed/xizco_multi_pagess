$(function(){

 
  //   BANNER SLIDER
   
   $('.slider_active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
   
   
   
 
 //MIX_IT_UP
    
//  var mixer = mixitup('.mix_wrap');
 
//   VENOBOX
 
$('.venobox').venobox({
    spinner:'cube-grid',
    share:['facebook', 'twitter', 'pinterest', ],
    spinColor: 	'#5add87',
    
});
 
   
 
 //    FEEDBACK-SLIDER
    
$('.review_slide').slick({
    vertical:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow:2,
    slidesToScroll:1,
    dots:true,
});
	
	
//	FEEDBACK COLLAPS
	 $('.faq_header').on('click',function(){
	 
	 $('.faq_header button').removeClass('active');
	 $(this).children('button').addClass('active');
	 
 });
   
   
//    COUNTER-UP  
    
//      $(document).ready(function(){
//
//  $('.counter').each(function() {
//    var $this = $(this),
//        countTo = $this.attr('data-count');
//
//    $({ countNum: $this.text()}).animate({
//      countNum: countTo
//    },
//
//    {
//
//      duration: 5000,
//      easing:'linear',
//      step: function() {
//        $this.text(Math.floor(this.countNum));
//      },
//      complete: function() {
//        $this.text(this.countNum);
//      }
//    });
//  });
//
//});
  
   // counter
    $('.counter').counterUp({
        time: 5000
    });
  
  
//   ISOTOP
var $grid = $('.work_filter').isotope({
    itemSelector: '.single_itm',
    layoutMode: 'fitRows'
  });
  
  // filter items on button click
$('.work_gal').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  
  
  
  
  
  
  
 
    
    
});