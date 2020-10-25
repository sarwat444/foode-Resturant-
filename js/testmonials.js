$(document).ready(function(){
    
$("html").niceScroll({
cursorcolor :'#C9302C',
cursorwidth :'10px',
cursorborder :'0',
cursorborderradius :'0'

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