$(document).ready(function(){

	console.log("Ready!");
	$("#popupDiv").slideUp(10);

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("images/timeline_svg2_fullsize.svg", onSVGLoaded);

	var yearsGroup;
	var entitiesGroup;
	var pathsGroup;
	var communityEntities;

	var e1, e2, e3, e4, e5;
	var c1, c2, c3, c4, c5;

	var communityDesign;
	var youthDevelopment;
	var internationalDevelopment;
	var publicHealth;
	var technologyDevelopment;

	var person;



	function onSVGLoaded(svgFile){

		//Parse SVG file
		
		console.log("Loaded!");
		
		var whole = svgFile.select("#Layer1");

		var communityDesign = whole.select("#Community_Design");
		var communityEntities = communityDesign.select("#Entities_1_");
		person = communityEntities.select(".name");

		console.log(person);

		entitiesGroup = whole.select("#Entities");
		pathsGroup = whole.select("#Connections");

		// //Change cursor to indicate clickability
		entitiesGroup.hover(makeClickable(entitiesGroup));
		communityEntities.hover(makeClickable(communityEntities));
		pathsGroup.hover(makeClickable(pathsGroup));

		// person.click(function(){
		// 	// var id = $(this).attr('id');
		// 	// var id2 = $(this).get('node').attr('attributes')[1];
		// 	// console.log("clicked "+id+" "+id2);
		// 	console.log("clicked person");
		// });

		//Attach click listener to parent, get ID of child clicked
		communityEntities.click(function(){
			var id = $(this).attr('id');
			// console.log("Clicked on community entity "+id);
		})

		//Add to DOM
		paper.append(svgFile);
	}



	var makeClickable = function(name){
		name.addClass("hovered");
		console.log("Making clickable");

		if(name == 'pathsGroup'){ //This is not working 
			console.log("pathsgorup!");
			saul.attr({strokeWidth: 4});
		}
	}
	var entityClickTest = function(e){
		animateHiddenDiv(e);
	}

	var yearclicktest = function(){
		console.log("clicked!");
		sixties.animate({transform: 's2r45,150,150'}, 1000, mina.bounce);
	}
	var onhover = function(){
		console.log("Hover!");
		yearsGroup.animate({transform: 's2r45,150,150'}, 1000, mina.bounce);
	}

	var outhover = function(){
		console.log("Out hover!");
		yearsGroup.animate({transform: 's1r0,150,150'}, 1000, mina.bounce);
	}



	function animateHiddenDiv(e){
		e.preventDefault();
		console.log($("#popupDiv").css("visibility"));

		if($('#popupDiv').is(":visible")){
			console.log("div visible");
			$('#popupDiv').slideUp(2000);
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}


});