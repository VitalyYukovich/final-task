var slideCount;
var slideWidth;
var slideHeight;
var sliderUlWidth;
var minHeight=550;;//>minHeight?$('.main').height()*0.7:minHeight
jQuery(document).ready(function ($) {
    $('#slider ul li').height(650);
    $('#slider ul li').width($('.main').width()*0.6);

    resizeFont('.slide', '.caption', 30, 40);
    resizeFont('.slide', '.description',15, 200);
    resizeFont('.slide', '.number',110, 10);
    $('.number').css('top', - $('.slide').width()/25 - 45);
    $('.caption').css('padding-top', resizeFont('.slide', '.number',110, 10) + parseInt($('.number').css('top'),10) + 'px');

    setInterval(function () {
       moveRight();
    }, 3000);
    
	slideCount = $('#slider ul li').length;
	slideWidth = $('#slider ul li').width();
	slideHeight = $('#slider ul li').height();
	sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 700, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 700, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
            $('#slider ul li:nth-child(2) .slide .content .description span').addClass('animate');
            $('#slider ul li:first-child .slide .content .description span').removeClass('animate');
            $('#slider ul li:nth-child(2) .slide .content .caption').addClass('animate');
            $('#slider ul li:first-child .slide .content .caption').removeClass('animate');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});   

$(window).resize(function(event) {

    $('#slider ul li').width($('.main').width()*0.6);

    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    slideHeight = $('#slider ul li').height();
    sliderUlWidth = slideCount * slideWidth;

    $('#slider').width(slideWidth);
    $('#slider ul').css({
        'marginLeft':-slideWidth,
        'width': sliderUlWidth
    });

    resizeFont('.slide', '.caption', 30, 40);
    resizeFont('.slide', '.description',15, 200);
    resizeFont('.slide', '.number',110, 10);

    $('.number').css('top', - $('.slide').width()/25 - 45);
    $('.caption').css('padding-top', resizeFont('.slide', '.number',110, 10) + parseInt($('.number').css('top'),10) + 'px');
});