$(document).ready(function(){
     

    
/*STRAT WOW ANIMATION */
   wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
    
/*End  WOW ANIMATION */

$('[placholder]').focus(function(){


$(this).attr('data-text' , $(this).attr('placholder')) ;

$(this).attr('placholder' , '') ;


}).blur(function(){


$(this).attr('placholder' , $(this).attr('data-text')) ;


});
    
  /*  
    
$(window).resize(function(){

$('#first-slider .carousel .item').height($(window).height()) ;

});
    
    
$('#first-slider .carousel .item').height($(window).height()) ;
    
    
   */ 

    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#carousel-example-generic').carousel({
        interval:1000,
        pause: "false"
    });
	

    
/*End The Slider */	
 //Start the Nice Scroll
$("html").niceScroll({
cursorcolor :'#C9302C',
cursorwidth :'10px',
cursorborder :'0',
cursorborderradius :'0'

}); 
    
$('.header .item').height($(window).height()) ;
//Start the side Navigation     
$(".header .bar").click(function(){
    
$(this).fadeOut(400 , function(){

$(".slide-nav").animate({width:'280px'}, 400) ; 
}); 
}); 
    
//End  the side Navigation 

 
	
$(".header .slide-nav ul li a").click(function(){
    
$("html,body").animate({

scrollTop:$("#"+$(this).data('value')).offset().top
    
},1000);
    
});
    


 
    

    
    
        
$(".header .slide-nav span").click(function(){
$(this).fadeIn(400 , function(){

$(".slide-nav").animate({width:'0'}, 400 ,function(){


$(".bar").fadeIn(400) ; 
    
}) ; 



}); 


});
    
/*Start the About Section*/    
$(".about .main1 .btn-danger").click(function(){

$(".parg").fadeToggle() ;
 $(this).text('READ LESS');   
   
    
});
    
/*Start Box Models*/    
var img1 = document.getElementById('myimg1');
var img2 = document.getElementById('myimg2'); 
var img3 = document.getElementById('myimg3');
var img4 = document.getElementById('myimg4'); 
var img5 = document.getElementById('myimg5');
var img6 = document.getElementById('myimg6'); 
var img7 = document.getElementById('myimg7');
var img8 = document.getElementById('myimg8'); 
var img9 = document.getElementById('myimg9'); 
    
var modal = document.getElementById('mymodal');  

var modalImg = document.getElementById("content");
    
var captionText = document.getElementById("caption");
    

img1.onclick = function(){
    
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
}

img2.onclick = function(){
    
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
}

img3.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
}  
img4.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 
img5.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 
img6.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 
img3.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 
img7.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 
img8.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
}
img9.onclick = function(){ 
modal.style.display = "block";
modalImg.src = this.src ; 
captionText.innerHTML = this.alt ; 
} 

/*Start the page2*/


$(document).ready(function() {
    
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });

    
    


});
    
});