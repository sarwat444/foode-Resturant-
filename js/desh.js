$(document).ready(function(){
$('.bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 500,
  slideMargin: 5,
  ticker: true,
  speed: 30000 , 
  tickerHover:true 
});    
    

/*STRAT WOW ANIMA,TION */
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




});