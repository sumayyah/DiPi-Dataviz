$(document).ready(function(){

	var offsetvar = 1; 

	console.log("Ready!");
	$('#popupDiv').slideDown(2000);

	
	console.log("Home "+$("#home").position().top+" community design "+$("#cdev").position().top);

	$('a').click(function(e){
		var id = $(this).attr('id');
		// console.log("ID is "+id);

		switch(id){
			case 'info':
				animateHiddenDiv(e);
				break;
			case 'title':
				console.log("clicke title!")
				$("html, body").animate({scrollTop: $("#home").position().top}, 1000);
				break;
			case 'cdev':
				$("html, body").animate({scrollTop: $("#first").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#cdev)").css({"color":"white"});
				return true;
				break;
			case 'ydev':
				$("html, body").animate({scrollTop: $("#second").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#ydev)").css({"color":"white"});
				return true;
				break;
			case 'health':
				$("html, body").animate({scrollTop: $("#third").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#health)").css({"color":"white"});
				return true;
				break;
			case 'itc':
				$("html, body").animate({scrollTop: $("#fourth").position().top}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#itc)").css({"color":"white"});
				return true;
				break;
			default:
				console.log("wrong clicked item!");
				break;
		}
	});

	function animateHiddenDiv(e){
		e.preventDefault();
		console.log("Animate hidden div");

		if($('#popupDiv').is(":visible")){
			console.log("div visible");
			$('#popupDiv').slideUp(2000);
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}

	// $(window).scroll(function(){
	// 	// console.log("Scrolling!");
	// 	console.log("Scrolling at "+$(window).scrollTop() + " "+$("#first").offset().top);
	// 	if( (($(window).scrollTop()+120) > $("#first").offset().top) && ($(window).scrollTop() < $("#second").offset().top) ){
	// 		console.log("Hit community design!");
	// 		$("#cdev").css({"color":"rgba(255,65,0,0.8)"});
	// 		$("a:not(#cdev)").css({"color":"white"});
	// 	} else if((($(window).scrollTop()+120) > $("#second").offset().top) && ($(window).scrollTop() < $("#third").offset().top)) {
	// 		console.log("Hit youth design!");
	// 		$("#ydev").css({"color":"rgba(255,65,0,0.8)"});
	// 		$("a:not(#ydev)").css({"color":"white"});
	// 	}else if((($(window).scrollTop()+120) > $("#third").offset().top) && ($(window).scrollTop() < $("#fourth").offset().top)){
	// 		console.log("Hit health!");
	// 		$("#health").css({"color":"rgba(255,65,0,0.8)"});
	// 		$("a:not(#health)").css({"color":"white"});
	// 	}else if(($(window).scrollTop()+120) > $("#fourth").offset().top){
	// 		console.log("Hit itc!");
	// 		$("#itc").css({"color":"rgba(255,65,0,0.8)"});
	// 		$("a:not(#itc)").css({"color":"white"});
	// 	} else $('a').css({"color":"white"});
	// });

});