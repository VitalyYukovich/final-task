$(document).ready(function()
{
		repaint();
});


function resizeFont(parent, elem, defaultSize, speedChange){
    var fontSize = $(parent).width()/speedChange+defaultSize;
    $(elem).css({
        'font-size':$(parent).width()/speedChange+defaultSize+'px',
    });
    return fontSize;
}

$(window).resize(function()
{	
	resizeFont('.background', '.symbol',10, 80);
});
function repaint() {
	var arraySymbols=["A", "M", "&#9651", "C", "&#11096", "D", "E", "N", "&#11040", "I"];//"&#9633", "&#9651", "&#9675", "&#11040"
	var numberOfSymbol = arraySymbols.length;
	var arrayCoords=[[700,80],[40,150],[30,450],[300, 720],[720,800],[1400,770],[1750,650], [1780,330], [1780,15], [1380,220]];
	var arrayColors=['yellow','red','deepskyblue','orange','lime','deepskyblue','blueviolet', 'mediumorchid', 'red', 'lime'];
	var arrayAngelRotate=[45,-30, -15, 30, -90, -45, 15, -20, 10,-30];
	for(var i = 0; i < numberOfSymbol; i++) {
		var bokeh = $("<div />")
			.addClass("symbol")
			.css({					
					'left' : (arrayCoords[i][0]/19.2)+"%",
					'top' : arrayCoords[i][1]/9.38+"%",
					'color' : arrayColors[i],
					'transform' : 'rotate('+ arrayAngelRotate[i]+ 'deg)',
					'font-size': resizeFont('.background', '.symbol',10, 80)
				})
			.addClass('symbol'+i);
		bokeh.appendTo("#background");
	}
	for(var i=0; i<numberOfSymbol; i++){
		$('.symbol'+i).html(arraySymbols[i]);

	}
}

