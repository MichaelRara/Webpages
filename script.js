$(document).ready(function(){
	$('.houses').children(':not(:last)').hide();
		setInterval(function(){
			$('.houses').children(':last').fadeOut(2000,function(){
				$(this).prependTo($('.houses'));
			}).prev().fadeIn(2500);
		}, 4500);
	/*Liščí služby */
	var time=700;
	$('.text').on('mouseenter', function(){
	$('.text').add("#sluzby").stop().animate({"fontSize":"20px"},time).next().stop().animate({"fontSize":"17.5px", "marginTop":"-19px"},time)});
	$('.text').on('mouseleave', function(){
	$('.text').add("#sluzby").stop().animate({"fontSize":"18px"},time).next().stop().animate({"fontSize":"16.125px"},time)});
	/*Lightbox*/
	$('.image4 img').on('click', function()
		{
			$('.sheet').fadeIn(150).html( $('<img>', { src:$(this).attr('src') } ));
		});


	/*Ukončí ligtbox*/
	$('.sheet').on('click', function(){
	$('.sheet').hide();
});




});
