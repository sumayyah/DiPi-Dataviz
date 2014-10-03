$(document).ready(function(){

	console.log("Ready!");
	$("#popupDiv").slideUp(10);
	var entityNames =["arnstein", "davidoff", "krumholz", "alinsky", "linn", "halprin", "curry","arch", "arc", "and", "acd", "sanoff", "hester", "francis", "hamdi", "hou","prpcdn", "lynch", "hart", "moore", "chawla", "driskell","miginc", "crc", "la21", "unicef_irc", "cpcs","freire", "chambers","isd","unrisd","worldbank","undp","donors","icae", "pria" ,"sewa","grameen","fals-borda","opp-rti", "whyte", "minkler", "wallerstein","cbpr", "drsconference","njmf","demos","due","utopia", "xerox","florence","atproject", "cpsr","pdc", "psp", "ehn", "atelier" , "sanders","guc_1_","guc"];

	var jsonDataObj;

	jQuery.getJSON("materials/entities_info_nospace.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		var firstname = data.items[0].Practitioner;
		console.log("First name is: "+firstname);
	});

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("materials/timeline2.svg", onSVGLoaded);

	var yearsGroup;
	var entitiesGroup;
	var pathsGroup;

	var communityDesign;
	var youthDevelopment;
	var internationalDevelopment;
	var publicHealth;
	var technologyDevelopment;

	var entityArray;
	var entities,entities1,entities2,entities3, entities4;


	function onSVGLoaded(svgFile){

		//Parse SVG file
		
		console.log("Loaded!");
		
		var whole = svgFile.select("#Layer1");

		communityDesign = whole.select("#Community_Design");
		youthDevelopment = whole.select("#Youth_Development");
		internationalDevelopment = whole.select("#International_Development");
		publicHealth = whole.select("#Public_Health");
		technologyDevelopment = whole.select("#Technology_Development");

		entityArray = whole.selectAll(".name");

		entities = whole.select("#Entities");
		entities1 = whole.select("#Entities_1_");
		entities2 = whole.select("#Entities_2_");
		entities3 = whole.select("#Entities_3_");
		entities4 = whole.select("#Entities_4_");

		entitiesGroup = whole.group(entities, entities1, entities2, entities3, entities4);
		pathsGroup = whole.select("#Connections");

		// //Change cursor to indicate clickability
		entitiesGroup.hover(makeClickable(entitiesGroup));
		pathsGroup.hover(makeClickable(pathsGroup));
		
		entityArray.forEach(function(element, index, array){
			element.click(function(){
				var id = element.attr('id');
				console.log('clicked '+id);
				setHiddenDiv(id);
			});
		});

		//Add to DOM
		paper.append(svgFile);
	}

	$('a').click(function(e){
		var id = $(this).attr('id');

		switch(id){
			case 'cdev':
				console.log("clicked comm dev!");
				$("html, body").animate({scrollTop: $("#Community_Design").position().top-150}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#cdev)").css({"color":"white"});
				return true;
			break;

			case 'ydev':
				console.log("clicked youth!");
				$("html, body").animate({scrollTop: $("#Youth_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#ydev)").css({"color":"white"});
				return true;
			break;

			case 'iDev':
				console.log("clicked international dev!");
				$("html, body").animate({scrollTop: $("#International_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#iDev)").css({"color":"white"});
				return true;
			break;

			case 'health':
				console.log("clicked health!");
				$("html, body").animate({scrollTop: $("#Public_Health").position().top-150}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#health)").css({"color":"white"});
				return true;
			break;

			case 'tech':
				console.log("clicked tech!");
				$("html, body").animate({scrollTop: $("#Technology_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"rgba(255,65,0,0.8)"});
				$("a:not(#tech)").css({"color":"white"});
				return true;
			break;

		default:
			console.log("Clicked on something else :(");
			break;
		}
		

	});

	function setHiddenDiv(id){

		entityNames.forEach(function(element, index, array){
			if(id == element){
				console.log("Matched "+id+" and "+element);
				var obj = jsonDataObj[index];
				$("#name").text(obj.Practitioner);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.Quotes);
					$("#aboutPerson").text(obj.About);
					$("#connections").text(obj.Connections);
					$("#publications").text(obj.Publications);
					animateHiddenDiv();
			}
		});
	}

	var makeClickable = function(name){
		name.addClass("hovered");
		console.log("Making clickable");

		if(name == 'pathsGroup'){ //This is not working 
			console.log("pathsgorup!");
			saul.attr({strokeWidth: 4});
		}
	}

	$('#close').click(function(){
		$('#popupDiv').slideUp(2000);
	})

	function animateHiddenDiv(){

		if($('#popupDiv').is(":visible")){
		} else { 
			$('#popupDiv').slideDown(2000);
		}
	}


});