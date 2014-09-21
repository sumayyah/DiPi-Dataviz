$(document).ready(function(){

	console.log("Ready!");
	$('#popupDiv').slideUp(10);

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("images/timeline_svg_modified.svg", onSVGLoaded);

	var yearsGroup;
	var entitiesGroup;
	var pathsGroup;


	var sixties;
	var saul;

	function onSVGLoaded(svgFile){

		//Parse SVG file
		
		console.log("Loeaded!");
		
		var whole = svgFile.select("#Layer_1");
		yearsGroup = whole.select("#Years");
		entitiesGroup = whole.select("#Entities");
		pathsGroup = whole.select("#Connections");

		saul = entitiesGroup.select("#saul");
		sixties = yearsGroup.select("#_x31_960s");

		//Define functionalities for each section
		// yearsGroup.hover(onhover, outhover);
		sixties.click(yearclicktest);
		saul.click(entityClickTest);

		//Change cursor to indicate clickability
		entitiesGroup.hover(makeClickable(entitiesGroup));
		pathsGroup.hover(makeClickable(pathsGroup));

		//Add to DOM
		paper.append(svgFile);
	}

	var makeClickable = function(name){
		console.log("hovered!!");
		name.addClass("hovered");

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