
$(document).ready(function(){

	console.log("Loaded animation!");

	$('.downloadable').hover(function(){
		console.log("hovered!");
		$(this).children(".overlay").css({'visibility':'visible'});
	}, function(){
		$(this).children(".overlay").css({'visibility':'hidden'});
	});

});