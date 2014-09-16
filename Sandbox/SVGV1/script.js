$(document).ready(function(){

	var offsetvar = 1; 

	console.log("Ready!");

	$("#content").load("timeline_svg_modified.svg", function(res){
		if(!res){
			console.log("Error loading svg!");
		}
		console.log("Loaded svg!");
		$(this).addClass("svgLoaded");

		
	})

});