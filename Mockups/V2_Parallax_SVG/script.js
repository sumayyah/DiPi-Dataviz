$(document).ready(function(){

	var width = $(window).width()+"px";
	$('#popupDiv').css({'width':width});
	$('nav').css({'width':width});
	$("#content").css({'width':width});
	$('footer').css({'width':width});
	// TODO: what if this is a really wide window? 
	console.log("width is "+width);

	$(window).resize(function(){
		// To get make sure pages do fill the screen, but don't squash content - works when you start small(squashed)->big, resize ok; Big to small ok; Start small is an issue
		var width = $(window).width()+"px";
		$('#popupDiv').css({'width':width});
		$('nav').css({'width':width});
		$("#content").css({'width':width});
		$('footer').css({'width':width});
		// TODO: what if this is a really wide window? 
		console.log("width is "+width);
	});

	console.log("Ready!");
	$("#popupDiv").slideUp(10);

	var jsonDataObj;

	jQuery.getJSON("materials/entities_info2.json", function(data){
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
				setHiddenDiv(id);
			});

			element.hover(function(){
				text.forEach(function(textEl, textIndex, textArray){
					textEl.attr({fill: "#ED1C25"});
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
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#cdev)").css({"color":"white"});
				return true;
			break;

			case 'ydev':
				console.log("clicked youth!");
				$("html, body").animate({scrollTop: $("#Youth_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#ydev)").css({"color":"white"});
				return true;
			break;

			case 'iDev':
				console.log("clicked international dev!");
				$("html, body").animate({scrollTop: $("#International_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#iDev)").css({"color":"white"});
				return true;
			break;

			case 'health':
				console.log("clicked health!");
				$("html, body").animate({scrollTop: $("#Public_Health").position().top-150}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#health)").css({"color":"white"});
				return true;
			break;

			case 'tech':
				console.log("clicked tech!");
				$("html, body").animate({scrollTop: $("#Technology_Development").position().top-150}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#tech)").css({"color":"white"});
				return true;
			break;

		default:
			console.log("Clicked on something else :(");
			break;
		}
		

	});

	$('.navLinks a').hover(function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"#ED1C25"});
	}, function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"white"});
	})

	function setHiddenDiv(id){

		for(var i=0;i<jsonDataObj.length;i++){
			var obj = jsonDataObj[i];
			
			if(id==obj.Tag){
				// console.log("Matched "+id+" and "+obj.Tag);

					$("#name").text(obj.NameofEntities);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.QuotesaboutParticipation);
					$("#aboutPerson").text(obj.AboutEntity);
					$("#connections").text(obj.KeyConnections);
					$("#publications").text(obj.KeyPublications);
					setCountry(obj.Geography);
					
					animateHiddenDiv();
			}
		}

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
		console.log("got "+country);

		if(country.search("USA")>-1){

			if(country.search("Norway")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_US_Norway_Worldwide.png');
			else if(country.search("Worldwide")> -1) $("#globe img").attr('src', 'images/map_pngs/Map_US_Worldwide.png');
			else if(country.search("Taiwan")>-1){
				if(country.search("HongKong")>-1 && country.search("SouthKorea")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_US_Taiwan_HongKong_SouthKorea.png');
				else $("#globe img").attr('src', 'images/map_pngs/Map_US_Taiwan.png');
			}
			else if(country.search("India")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_US_India.png');
			else $("#globe img").attr('src', 'images/map_pngs/Map_US.png');
			
		} 
		else if(country.search("UK")>-1){

			if(country.search("SouthAfrica")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_UK_SouthAfrica_Worldwide.png');
			else if(country.search("Worldwide")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_UK_Worldwide.png');
			else $("#globe img").attr('src', 'images/map_pngs/Map_UK.png');
				
		} 
		else if(country.search("Bangladesh")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Bangladesh_Worldwide.png'); 
		else if(country.search("Italy")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Italy_Worldwide.png');
		else if(country.search("Sweden")>-1){
			if(country.search("Denmark")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Sweden_Denmark.png');
			else $("#globe img").attr('src', 'images/map_pngs/Map_Sweden.png');
			
		}
		else if(country.search("Worldwide")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Worldwide.png');
		else if(country.search("Argentina")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Argentina.png');
		else if(country.search("Brazil")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Brazil.png');
		else if(country.search("Denmark")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Denmark.png');
		else if(country.search("India")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_India.png');
		else if(country.search("Norway")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Norway.png');
		else if(country.search("Pakistan")>-1) $("#globe img").attr('src', 'images/map_pngs/Map_Pakistan.png');
		else $("#globe img").attr('src', '');

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