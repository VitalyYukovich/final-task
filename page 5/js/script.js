function commonValidation(e){
				if($('.block').length)
					$('.block').remove();
				e.preventDefault();
				var name=$('#name');
				var email=$('#email');
				var nameRegex=/^[A-Z][a-z]{2,15}$/;
				console.log(name.val());
				if (!name.val().match(nameRegex))
					createMark(name,'Введено неверное имя. Имя может содержать только буквы (от 3 до 16) и начинаться с заглавной буквы', 0)
				if (!email.val().match(/^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/))
					createMark(email,"Введен неверный email. Пример записи email'a: example.2018@gmail.com",0)
				if($('input:checkbox:checked').length<1)
					createMark($('#checkboxContainer'),"Нужно выбрать хотя бы один пункт",1)
				return false;
			}
			function createMark(obj,error,top){
    			var mark = $("<div />").addClass("block");
				mark.html('<img src="./img/mark.png"> <p>'+error+'</p>');
				mark.css({
					 "top":obj.position().top+parseInt(obj.css('padding-top'))+parseInt(obj.css('padding-bottom'))+obj.height()+12+'px',
					 "left":obj.css('left')+'px'
				});
				mark.appendTo('.rightHalf');
				setTimeout(function(){
					mark.remove();
				},5000)
  				return false;
			}
function resizeFont(parent, elem){
	$(parent+' '+elem).css({
		'font-size':$(parent).width()/3.5+$(parent).height()/30+'px',
    });
}
function changePosition(){
	$('.rightHalf .contact').css({
		'bottom': $(".rightHalf").height()/200-$(".rightHalf").width()/15-5+'px',
		'right':-$(".rightHalf").width()/80+'px'
	});
	$('.leftHalf .about').css({
		'top': $(".leftHalf").height()/200-$(".leftHalf").width()/15-5+'px',
		'right': -$(".leftHalf").width()/5.5-15+'px'
	});
}
$(document).ready(function()
{
	resizeFont('.leftHalf', '.about');
	resizeFont('.rightHalf', '.contact');
	changePosition();
});

$( window ).resize(function() {
	resizeFont('.leftHalf', '.about');
	resizeFont('.rightHalf', '.contact');
	changePosition();
	if($('.block').length)
		$('.block').remove();
});
