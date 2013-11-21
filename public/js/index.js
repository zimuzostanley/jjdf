$(function() {
	$('.phone-desktop').click(function() {
		$('.direction-wrapper').css('display', 'none');
		$('.phone-wrapper').toggle();
	});

	$('.direction-desktop').click(function() {
		$('.phone-wrapper').css('display', 'none');
		$('.direction-wrapper').toggle();
	});

	$('#read-more-started').click(function() {
		$('#read-more-started').css('display', 'none');
		$('.extra-started').css('display', 'block');
	});

	$('#read-more-clement').click(function() {
		$('#read-more-clement').css('display', 'none');
		$('.extra-clement').css('display', 'block');
	});

	$('#read-more-ifeoma').click(function() {
		$('#read-more-ifeoma').css('display', 'none');
		$('.extra-ifeoma').css('display', 'block');
	});

	$('.accordion-heading').click(function() {
		$('.extra-started').css('display', 'none');
		$('.extra-clement').css('display', 'none');
		$('.extra-ifeoma').css('display', 'none');

		$('#read-more-started').css('display', 'inline');
		$('#read-more-clement').css('display', 'inline');
		$('#read-more-ifeoma').css('display', 'inline');
	});

	$('.phone-mobile').click(function() {
		$('.direction-wrapper').css('display', 'none');
		$('.phone-wrapper').toggle();
	});

	$('.direction-mobile').click(function() {
		$('.phone-wrapper').css('display', 'none');
		$('.direction-wrapper').toggle();
	});
});

