$(document).ready(function(){

	console.log("Ready!");

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("images/timeline_svg_mod2.svg", onSVGLoaded);

	var yearsGroup;
	var entitiesGroup;
	var pathsGroup;

	var e1, e2, e3, e4, e5;
	var c1, c2, c3, c4, c5;

	var communityDesign;
	var youthDevelopment;
	var internationalDevelopment;
	var publicHealth;
	var technologyDevelopment;



	function onSVGLoaded(svgFile){

		//Parse SVG file
		
		console.log("Lo aded!");
		
		var whole = svgFile.select("#Layer_1");

		communityDesign = whole.select("#Community_Design");
		youthDevelopment = whole.select("#Youth_Development");
		internationalDevelopment = whole.select("#International_Development");
		publicHealth = whole.select("#Public_Health");
		technologyDevelopment = whole.select("#Technology_Development");

		yearsGroup = whole.select("#Years");
		e1 = whole.select("#entities");
		e2 = whole.select("#entities_1_");
		e3 = whole.select("#entities_2_");
		e4 = whole.select("#entities_3_");
		e5 = whole.select("#entities_4_");

		c1 = whole.select("#connections");
		c2 = whole.select("#connections_1_");
		c3 = whole.select("#connections_2_");
		c4 = whole.select("#connections_3_");
		c5 = whole.select("#connections_4_");

		entitiesGroup = paper.group(e1, e2, e3, e4, e5);
		pathsGroup = paper.group(c1, c2, c3, c4, c5);

		// entitiesGroup = whole.selectAll("#entities, #entities_1_, #entities_2_, #entities_3_, #entities_4_");
		// pathsGroup = whole.selectAll("#connections, #connections_1_, #connections_2_, #connections_3_, #connections_4_");

		//Define functionalities for each section
		// yearsGroup.hover(onhover, outhover);

		var saul = whole.select("#alinsky");
		saul.click(animateHiddenDiv(e));

		//Change cursor to indicate clickability
		entitiesGroup.hover(makeClickable(entitiesGroup));
		pathsGroup.hover(makeClickable(pathsGroup));

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