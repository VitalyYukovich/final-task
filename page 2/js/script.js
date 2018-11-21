$(document).ready(function()
{
	resizeFont('.card', '.title',10, 40);
	resizeFont('.card', '.text .animate',6, 50);
});

$( window ).resize(function() {
	resizeFont('.card', '.title',10, 40);
	resizeFont('.card', '.text .animate',6, 50);
});

