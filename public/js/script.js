$(document).ready(function() {
	$('#button').click(function() {
		$('img').toggle();
	});
	$('.checkbox').click(function() {
		$(this).parent().toggleClass("blue pink");
	});
	$('#oreos').animate({left:10});
	$('#balls').animate({right:50});
});
