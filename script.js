$(document).ready(function(){
    console.log('Oven is Ready!');
	$('.hamburger').click(function(){
        $(this).toggleClass('open');
        $('ul.navigator').toggleClass('show');
    });
    $('.landing').mouseover(function(){
        console.log('the mouse is moving');
        $('.triangle, .square, .circle, .circleStripes, .cross, .hollowTraingle, .triangleStripes, .hollowTraingle, .zigzag').toggleClass("move");
    });
});


// $(".rotate").click(function(){
//     $(this).toggleClass("down"); 
// });