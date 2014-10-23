$(document).ready(function(){

	console.log("Ready!");
	$("#popupDiv").slideUp(10);

	var entityNames =["arnstein", "davidoff", "krumholz", "alinsky", "linn", "halprin", "curry","arch", "arc", "and", "acd", "sanoff", "hester", "francis", "hamdi", "hou","prpcdn", "lynch","guc1", "hart", "moore", "chawla", "driskell","guc2","miginc", "crc", "la21", "unicef_irc", "cpcs","freire", "chambers","ids","uni","wb","undp","do","icae", "pria" ,"sewa","bank","fals-borda","opp-rti", "whyte", "minkler", "wallerstein","cbpr", "drscdp","njmfn","demoss","dued","utopiasd", "xparc","fp","atpd", "cpsr","pdc", "psp", "ehn", "ap" , "sanders"];

	var jsonDataObj;

	jQuery.getJSON("materials/entities_info_nospace2.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		
	});

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("materials/timeline4.svg", onSVGLoaded);

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
			var id = element.attr('id');
			var text = element.selectAll('text');

			element.click(function(){
				console.log('clicked '+id);
				setHiddenDiv(id);
			});

			element.hover(function(){
				text.forEach(function(textEl, textIndex, textArray){
					textEl.attr({fill: "#D39C2A"});
				})
			}, function(){
				text.forEach(function(textEl, textIndex, textArray){
					textEl.attr({fill: "#000"});
				})
			})

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
				$("#"+id).css({"color":"#D39C2A"});
				$("a:not(#cdev)").css({"color":"white"});
				return true;
			break;

			case 'ydev':
				console.log("clicked youth!");
				$("html, body").animate({scrollTop: $("#Youth_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#D39C2A"});
				$("a:not(#ydev)").css({"color":"white"});
				return true;
			break;

			case 'iDev':
				console.log("clicked international dev!");
				$("html, body").animate({scrollTop: $("#International_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#D39C2A"});
				$("a:not(#iDev)").css({"color":"white"});
				return true;
			break;

			case 'health':
				console.log("clicked health!");
				$("html, body").animate({scrollTop: $("#Public_Health").position().top-150}, 1000);
				$("#"+id).css({"color":"#D39C2A"});
				$("a:not(#health)").css({"color":"white"});
				return true;
			break;

			case 'tech':
				console.log("clicked tech!");
				$("html, body").animate({scrollTop: $("#Technology_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#D39C2A"});
				$("a:not(#tech)").css({"color":"white"});
				return true;
			break;

		default:
			console.log("Clicked on something else :(");
			break;
		}
		

	});

	function setHiddenDiv(id){

		for(var i=0;i<jsonDataObj.length;i++){
			var obj = jsonDataObj[i];
			
			if(id==obj.Tag){
				console.log("Matched "+id+" and "+obj.Tag);

				$("#name").text(obj.Name);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.Quotes);
					$("#aboutPerson").text(obj.About);
					$("#connections").text(obj.Connections);
					$("#publications").text(obj.Publications);
					if(obj.Geography.search("USA")>-1){
						$("#globe img").attr('src', 'materials/Map_US.png');
					} else {
						$("#globe img").attr('src', "");
						
					}
					animateHiddenDiv();
			}
		}
		// entityNames.forEach(function(element, index, array){
		// 	if(id == element){
		// 		console.log("Matched "+id+" and "+element);

		// 		var obj = jsonDataObj[index];
		// 			$("#name").text(obj.Name);
		// 			$("#years").text(obj.Decade);
		// 			$("#fields").text(obj.Field);
		// 			$("#quotes").text(obj.Quotes);
		// 			$("#aboutPerson").text(obj.About);
		// 			$("#connections").text(obj.Connections);
		// 			$("#publications").text(obj.Publications);
		// 			if(obj.Geography.search("USA")>-1){
		// 				console.log("Country is usa!"+obj.Country);
		// 				$("#globe img").attr('src', 'materials/Map_US.png');
		// 			} else {
		// 				console.log("Not USA :(");
		// 					// $("#globe img").css({"display":"none"});
		// 					$("#globe img").attr('src', "");
		// 				// var mapImg = document.getElementById('globe');
		// 				// mapImg.parentNode.removeChild(mapImg);
		// 			}
		// 			animateHiddenDiv();
		// 	}
		// });
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

	function setCountry(country){

	}
	function animateHiddenDiv(){

		if($('#popupDiv').is(":visible")){
		} else { 
			$('#popupDiv').slideDown(2000);
		}
	}

	function inHover(element){
		console.log("In hover "+element.attr('id'));
		// element.attr({fill:"#f00"});
	}
	function outHover(element){
		console.log("Out hover"+element.attr('id'));
		element.attr({fill: "#fff"});
	}


});