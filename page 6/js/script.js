$(document).ready(function()
{	
	resizeFont('body', '.contact>.adds',20, 100);
	resizeFont('body', '.contact>.email',18, 350);
	resizeFont('body', '.contact>.phone',16, 400);
	$('.picPlanet').css({
		'width': $('body').width()/30+55,
		'height': $('body').width()/30+55
	})
});

$(window).resize(function()
{	
	resizeFont('body', '.contact>.adds',20, 100);
	resizeFont('body', '.contact>.email',18, 350);
	resizeFont('body', '.contact>.phone',16, 400);
	$('.picPlanet').css({
		'width': $('body').width()/30+55,
		'height': $('body').width()/30+55
	})
});
