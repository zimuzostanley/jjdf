$(function() {
	$('body').scrollspy({ target: '#navbar-jjdf' });
	alert('zim');
	$('#read-more-about').click(function() {
		$('.extra-about').css('display', 'block');
		$(this).css('display', 'none');
	});
});

