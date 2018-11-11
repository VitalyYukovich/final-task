$(window).load(function() {
	$('.blueberry').blueberry();
	$('.about').css('font-size',$('.slides .active').height()/35+2+'px');
});
$(document).ready(function() {
});
$(window).resize(function()
{
	$('.about').css('font-size',$('.slides .active').height()/35+2+'px');
});