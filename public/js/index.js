$(function() {
	$('body').scrollspy({ target: '#navbar-jjdf' });
	$('[data-spy="scroll"]').each(function () {
  		var $spy = $(this).scrollspy('refresh')
	});
	$('#read-more-about').click(function() {
		$('.extra-about').css('display', 'block');
		$(this).css('display', 'none');
	});
});

