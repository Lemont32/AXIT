'use strict'

$('.rates').slick({
	infinite: false,
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	centerPadding: '20px',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true,
			  centerPadding: 0,
			  dots: false
			}
		},
	]
});