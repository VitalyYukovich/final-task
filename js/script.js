$(document).ready(function()
{
	repaint();
	setup();
    setInterval(function () {
       setup();
    }, 2000);
});

var delta=$(window).width()/1920*20;
var arraySymbols=["A", "M", "&#9651", "C", "&#11096", "D", "E", "N", "&#11040", "I"];//"&#9633", "&#9651", "&#9675", "&#11040"
var numberOfSymbol = arraySymbols.length;
var arrayCoords=[[700,100],[60,150],[50,450],[300, 720],[720,800],[1400,760],[1730,650], [1760,330], [1750,35], [1380,220]];
var arrayColors=['yellow','red','deepskyblue','orange','lime','deepskyblue','blueviolet', 'mediumorchid', 'red', 'lime'];
var arrayAngelRotate=[45,-30, -15, 30, -90, -45, 15, -20, 10,-30];

function setup(){
	for(var i=0; i<numberOfSymbol; i++){
 		$('.symbol'+i).css({
    		'transform':'scale('+(0.6+ Math.random())+') translateX('+(-delta+Math.random()*(delta*2))+'px) translateY('+(-delta+Math.random()*(delta*2))+'px) rotate('+(-20+Math.random()*40)+'deg)'
 		})
 	}
 }
function resizeFont(parent, elem, defaultSize, speedChange){
    var fontSize = $(parent).width()/speedChange+defaultSize;
    $(elem).css({
        'font-size': $(parent).width()/speedChange+defaultSize
    });
    return fontSize;
}

$(window).resize(function()
{	
	resizeFont('#background', '.symbol',10, 150);
});
function repaint() {
	for(var i = 0; i < numberOfSymbol; i++) {
		var bokeh = $("<div />")
			.addClass("symbol")
			.css({					
					'left' : (arrayCoords[i][0]/19.2)+"%",
					'top' : arrayCoords[i][1]/9.38+"%",
					'color' : arrayColors[i],
					'transform' : 'rotate('+ arrayAngelRotate[i]+ 'deg)',
					'font-size': resizeFont('#background', '.symbol',10, 150)
				})
			.addClass('symbol'+i);
		bokeh.appendTo("#background");
	}
	for(var i=0; i<numberOfSymbol; i++){
		$('.symbol'+i).html(arraySymbols[i]);

	}
}

