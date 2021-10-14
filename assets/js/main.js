(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);

		//Back to top
         //Get the button
         var mybutton = document.getElementById("myBtn");
         // When the user scrolls down 20px from the top of the document, show the button
         window.onscroll = function() {
            scrollFunction()
         };

         function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               mybutton.style.display = "block";
            } else {
               mybutton.style.display = "none";
            }
         }
         // When the user clicks on the button, scroll to the top of the document
         function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
         }
		 
		 
// Anti Copas
		$(document).bind("contextmenu",function(e){
		return false;
		});
		
		
		document.querySelector("#accordion")