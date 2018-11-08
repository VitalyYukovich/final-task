$(document).ready(function()
{
	repaint();
});
function repaint() {
	var arraySymbols=["A", "M", "&#9651", "C", "&#11096", "D", "E", "N", "&#11040", "I"];//"&#9633", "&#9651", "&#9675", "&#11040"
	var numberOfSymbol = arraySymbols.length;
	var arrayCoords=[[700,80],[30,150],[15,450],[300, 750],[720,890],[1400,800],[1750,650], [1800,330], [1850,15], [1380,220]];
	var arrayColors=['yellow','red','deepskyblue','orange','lime','deepskyblue','blueviolet', 'mediumorchid', 'red', 'lime'];
	var arrayAngelRotate=[45,-30, -15, 30, 0, -45, 15, -20, 10,-30];
	for(var i = 0; i < numberOfSymbol; i++) {
		var bokeh = $("<div />")
			.addClass("symbol")
			.css({					
					'left' : arrayCoords[i][0],
					'top' : arrayCoords[i][1],
					'color' : arrayColors[i],
					'transform' : 'rotate('+ arrayAngelRotate[i]+ 'deg)',
					'font-size':'30px'
				})
			.addClass('symbol'+i);
		bokeh.appendTo("#background");
	}
	for(var i=0; i<numberOfSymbol; i++){
		$('.symbol'+i).html(arraySymbols[i]);

	}
}

