$(document).ready(function(){
    console.log('Oven is Ready!');
	$('.hamburger').click(function(){
        $(this).toggleClass('open');
        $('ul.navigator').toggleClass('show');
    });
    $('.landing').mouseenter(function(){
        console.log('the mouse is moving');
        $('.triangle, .square, .hollowSquare, .circleStripes, .cross, .hollowTraingle, .triangleStripes, .hollowTraingle, .zigzag, .zigzagTwo').toggleClass("move");
    });
    $('.landing').mouseleave(function(){
        console.log('the mouse left');
        $('.triangle, .square, .hollowSquare, .circleStripes, .cross, .hollowTraingle, .triangleStripes, .hollowTraingle, .zigzag, .zigzagTwo').removeClass("move");
    });
});


