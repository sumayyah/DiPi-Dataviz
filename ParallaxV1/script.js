$(document).ready(function(){

	var offsetvar = 1; 

	console.log("Ready!");

	$('a').click(function(){
		var id = $(this).attr('id');
		console.log("ID is "+id);

		switch(id){
			case 'cdev':
				$("html, body").animate({scrollTop: $("#first").position().top}, 1000);
				return true;
				break;
			case 'ydev':
				$("html, body").animate({scrollTop: $("#second").position().top}, 1000);
				return true;
				break;
			case 'health':
				$("html, body").animate({scrollTop: $("#third").position().top}, 1000);
				return true;
				break;
			case 'itc':
				$("html, body").animate({scrollTop: $("#fourth").position().top}, 1000);
				return true;
				break;
			default:
				console.log("wrong clicked item!");
				break;
		}
	});

});