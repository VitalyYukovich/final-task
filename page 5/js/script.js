function commonValidation(e){
				if($('.block').length)
					$('.block').remove();
				e.preventDefault();
				var name=document.getElementById('name');
				var email=document.getElementById('email');
				if (!name.value.match(/^[A-Z][a-z]{2,15}$/))
					createMark(name,'Введено неверное имя. Имя может содержать только буквы (от 3 до 16) и начинаться с заглавной буквы',62)
				if (!name.value.match(/^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/))
					createMark(email,"Введен неверный email. Пример записи email'a: example.2018@gmail.com",60)
				if($('input:checkbox:checked').length<1)
					createMark(document.getElementById('checkboxContainer'),"Нужно выбрать хотя бы один пункт",120)
				return false;
			}
			function createMark(obj,error,top){
    			var mark = $("<div />").addClass("block");
				mark.html('<img src="./img/mark.png"> <p>'+error+'</p>');
				mark.css({
					 "top":obj.getBoundingClientRect().top+ top+'px',
					 "left":obj.getBoundingClientRect().left+100+'px'
				});
				mark.appendTo('.main');
				setTimeout(function(){
					mark.remove();
				},10000000)
  				return false;
			}