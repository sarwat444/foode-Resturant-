$(document).ready(function(){
    
    

      
$(window).scroll(function(){
    
    
var x = $(window).scrollTop() ;
     
if(x >= 20 && x<=3350){
    
$('.main .left ,.main .right').animate({top:x}, 50);

}


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