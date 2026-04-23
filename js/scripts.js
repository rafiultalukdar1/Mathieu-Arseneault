$(document).ready(function() {	

	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 100) {
			jQuery('.header-area').addClass('header-fixed');
		} else {
			jQuery('.header-area').removeClass('header-fixed');
		}
	});


	
		
});
