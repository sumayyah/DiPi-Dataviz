
$(document).ready(function(){

	console.log("Loaded animation!");

	$('.downloadable').hover(function(){
		var className = $(this).attr('class')
		if(className == 'downloadable active') $(this).children(".overlay").css({'visibility':'visible'});
	}, function(){
		$(this).children(".overlay").css({'visibility':'hidden'});
	});

});