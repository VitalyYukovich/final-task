function resizeFont(parent, elem, defaultSize, speedChange){
    $(elem).css({
        'font-size':$(parent).width()/speedChange+defaultSize+'px',
    });
} 

$(document).ready(function()
{
	resizeFont('.card', '.title',15, 50);
	resizeFont('.card', '.text .animate',10, 50);
});

$( window ).resize(function() {
	resizeFont('.card', '.title',15, 50);
	resizeFont('.card', '.text .animate',10, 50);
});

