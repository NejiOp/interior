(function ($) {
"use strict";
/*Home main */
	$('#mainSlider').nivoSlider({
		directionNav: true,
		 effect: 'fade',
		animSpeed: 0,
		slices: 1,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});

/*Home2 */
	$('#home2-slider').nivoSlider({
		directionNav: true,
		animSpeed: 0,
		slices: 18,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});

	/*Home3 */
	$('#home3-slider').nivoSlider({
		directionNav: true,
		animSpeed: 0,
		slices: 18,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});

})(jQuery);	