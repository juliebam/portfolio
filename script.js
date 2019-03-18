$(document).ready(function(){
    console.log('Oven is Ready!');
	$('.hamburger').click(function(){
        $(this).toggleClass('open');
        $('ul.navigator').toggleClass('show');
	});
});