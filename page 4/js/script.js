jQuery(document).ready(function ($) {
	resizeFont('.card','.title', 15, 40);
	$('.title').css({
		'padding': $('.card').height()/10
	});
	resizeFont('.card','.arrow', 45, 40);
	//$('.arrow').css('top',$('.card').height()*3/4);
	$('.details .arrow').css('padding-left', $('.card').height()/10-4);
	$('.details .arrow:only-child').css('padding-top',$('.title').height()+$('.card').height()/10*2+2.5);

});
$(window).resize(function(event) {
	resizeFont('.card','.title', 15, 40);
	$('.title').css({
		'padding': $('.card').height()/10
	});
	resizeFont('.card','.arrow', 45, 40);
	//$('.arrow').css('top',$('.card').height()*3/4);
	$('.details .arrow').css('padding-left', $('.card').height()/10-4);
	$('.details .arrow:only-child').css('padding-top',$('.title').height()+$('.card').height()/10*2+2.5);
});