$(document).ready(function(){

	var offsetvar = 1; 

	console.log("Ready!");
	$('#popupDiv').slideDown(2000);


	$('a').click(function(e){
		var id = $(this).attr('id');
		// console.log("ID is "+id);

		switch(id){
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

});