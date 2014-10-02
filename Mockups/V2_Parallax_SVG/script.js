$(document).ready(function(){

	console.log("Ready!");
	$("#popupDiv").slideUp(10);
	var entities =["arnstein", "davidoff", "krumholz", "alinsky", "linn", "halprin", "curry","arch", "arc", "and", "acd", "sanoff", "hester", "francis", "hamdi", "hou","prpcdn", "lynch", "hart", "moore", "chawla", "driskell","miginc", "crtc", "la21", "unicef", "symposium","freie", "chambers","sussex","unrisd","worldbank","undp","donors","icae", "pria" ,"sewa","grameen","fals-borda","opp-rti", "whyte", "minkler", "wallerstein","cbpr", "drsconference","njmf","demos","utopia","due", "xerox","florence","atproject", "cpsr","pdc", "psp", "ehn", "atelier" , "sanders"];

	var jsonDataObj;

	jQuery.getJSON("materials/entities_info_nospace.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		var firstname = data.items[0].Practitioner;
		console.log("First name is: "+firstname);
	});

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("materials/timeline_svg2_fullsize.svg", onSVGLoaded);

	var yearsGroup;
	var entitiesGroup;
	var pathsGroup;
	var communityEntities;

	var communityDesign;
	var youthDevelopment;
	var internationalDevelopment;
	var publicHealth;
	var technologyDevelopment;

	var communityEntityArray;
	var entityArray;


	function onSVGLoaded(svgFile){

		//Parse SVG file
		
		console.log("Loaded!");
		
		var whole = svgFile.select("#Layer1");

		var communityDesign = whole.select("#Community_Design");
		var communityEntities = communityDesign.select("#Entities_1_");
		communityEntityArray = communityEntities.selectAll(".name");

		entitiesGroup = whole.select("#Entities");
		pathsGroup = whole.select("#Connections");

		// //Change cursor to indicate clickability
		entitiesGroup.hover(makeClickable(entitiesGroup));
		communityEntities.hover(makeClickable(communityEntities));
		pathsGroup.hover(makeClickable(pathsGroup));

		//Attach click listener to parent array, get ID of child clicked
		communityEntityArray.forEach(function(element, index, array){
			element.click(function(){
				var text = element.selectAll("#text");
				var id=element.attr('id');
				$("*").removeClass('clicked');
				console.log("clicked "+id);
				text.addClass('clicked');
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
		default:
			break;
		}
		

	});

	function setHiddenDiv(id){
		entities.forEach(function(element, index, array){
			if(id == element){
				var obj = jsonDataObj[index];
				$("#name").text(obj.Practitioner);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.Quotes);
					$("#aboutPerson").text(obj.About);
					$("#connections").text(obj.Connections);
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