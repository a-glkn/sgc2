$(function() {
    $('.menu-toggler').on('click', function(e) {
		$('.mobile-menu, .mobile-menu__inner').height( $(window).height() - $('.header').height() );
		
		$('body').toggleClass('menu-openned');
	});

	$('.tab-headers__item').on('click', function () { 

		var $section = $(this).parents('section');
		var i = $(this).index();


		$('.tab-headers__item.active', $section).removeClass('active');
		$(this).addClass('active');

		$('.tab-contents__item.active', $section).removeClass('active');
		$('.tab-contents__item:eq(' + i + ')', $section).addClass('active');

	});



	$('.food-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		fade: true
	});
			
});