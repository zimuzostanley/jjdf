$(function() {
	$('body').scrollspy({ target: '#navbar-header' });
	$('#read-more-about').click(function() {
		$('.extra-about').css('display', 'block');
		$(this).css('display', 'none');
	});
});

