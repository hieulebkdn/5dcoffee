/*global $:false, jQuery:false, console:false */
(function ($) {
	"use strict";

	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	$('.accordion').on('show', function (e) {

		$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
		$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
		$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
	});

	$('.accordion').on('hide', function (e) {
		$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
		$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
		$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
	});

})(jQuery);

$(window).scroll(function(){
	"use strict";
	if($(window).scrollTop()<10){

		$('.fade').stop(true,true).fadeTo("slow",1);
	} else {
		$('.fade').stop(true,true).fadeTo("slow", 0.33);
	}
});
