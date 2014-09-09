$(document).ready(function(){

	var offsetvar = 1; 

	console.log("Ready!");

	
	console.log("Home "+$("#home").position().top+" community design "+$("#cdev").position().top);

	$('a').click(function(){
		var id = $(this).attr('id');
		console.log("ID is "+id);

		switch(id){
			case 'title':
				$("html, body").animate({scrollTop: $("#home").position().top}, 1000);
				break;
			case 'cdev':
				$("html, body").animate({scrollTop: $("#first").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#cdev)").css({"color":"white"});
				// return true;
				break;
			case 'ydev':
				$("html, body").animate({scrollTop: $("#second").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#ydev)").css({"color":"white"});
				// return true;
				break;
			case 'health':
				$("html, body").animate({scrollTop: $("#third").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#health)").css({"color":"white"});
				// return true;
				break;
			case 'itc':
				$("html, body").animate({scrollTop: $("#fourth").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#itc)").css({"color":"white"});
				// return true;
				break;
			default:
				console.log("wrong clicked item!");
				break;
		}
	});

	$(window).scroll(function(){
		// console.log("Scrolling!");
		console.log("Scrolling at "+$(window).scrollTop() + " "+$("#first").offset().top);
		if($(window).scrollTop() > $("#first").offset().top){
			console.log("Hite community design!");
			$("#cdev").css({"color":"rgba(255,65,0,0.8)"});
			$("a:not(#cdev)").css({"color":"white"});
		} //TODO: finish the rest
	})

});