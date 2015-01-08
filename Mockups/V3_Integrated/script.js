$(document).ready(function(){

	var width = 1235+"px";
	$('#popupDiv').css({'min-width':width});
	$('nav').css({'min-width':width});
	$("#content").css({'min-width':width});
	$('footer').css({'min-width':width});

	var windowWidth = $(window).width()+"px";
	

	console.log("Ready!");
	$("#popupDiv").slideUp(10);

	var jsonDataObj;

	jQuery.getJSON("materials/entities_info2_PD.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
	});

	/***** ANIMATE SVG *****/

	var paper = Snap("#paper");

	Snap.load("materials/timeline5.svg", onSVGLoaded);

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
		
		var whole = svgFile.select("#Layer1");
		console.log("Loaded! "+whole.attr("width"));


		/***************SET SVG-DEPENDENT WIDTHS************/

		var svgWidth = whole.attr("width");

		// console.log("window svg footer content"+windowWidth+" "+svgWidth+" "+$('footer').width()+" "+$("#content").width());

		$('#navContainer').css({'width':svgWidth});
		$('#footerContainer').css({'width':svgWidth});
		$("#content").css({'max-width':windowWidth});
		$('footer').css({'max-width':'100%'});

		communityDesign = whole.select("#Community_Design");
		youthDevelopment = whole.select("#Youth_Development");
		internationalDevelopment = whole.select("#International_Development");
		publicHealth = whole.select("#Public_Health");
		technologyDevelopment = whole.select("#Technology_Development");

		entityArray = whole.selectAll(".name");

		entities = whole.select("#Entities");
		entities1 = whole.select("g#Entities_1_");
		entities2 = whole.select("#Entities_2_");
		entities3 = whole.select("#Entities_3_");
		entities4 = whole.select("#Entities_4_");

		

		entitiesGroup = whole.group(entities, entities1, entities2, entities3, entities4);
		pathsGroup = whole.select("#Connections");
		var array = entitiesGroup.node.children;

		console.log(array);
		for(var i=0; i< array.length;i++){
			var child = array[i].children;
			console.log(child)
			for(var j=0; j< child.length;j++){
				child[j].className.baseVal = "name";
				console.log(child[j])
			}
		}

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
				console.log("clicked comm dev! "+$("#Community_Design").position().top);//This value is way off in chrome, it's 116
				$("html, body").animate({scrollTop: "588px"}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#cdev)").css({"color":"white"});
				return true;
			break;

			case 'ydev':
				console.log("clicked youth!"+ $("#Youth_Development").position().top);
				$("html, body").animate({scrollTop: 912}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#ydev)").css({"color":"white"});
				return true;
			break;

			case 'iDev':
				console.log("clicked international dev!"+$("#International_Development").position().top);
				$("html, body").animate({scrollTop: 1460}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#iDev)").css({"color":"white"});
				return true;
			break;

			case 'health':
				console.log("clicked health!"+$("#Public_Health").position().top);
				$("html, body").animate({scrollTop: 1910}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#health)").css({"color":"white"});
				return true;
			break;

			case 'tech':
				console.log("clicked tech!"+$("#Technology_Development").position().top);
				$("html, body").animate({scrollTop: 2038}, 1000);
				$("#"+id).css({"color":"#ED1C25"});
				$("a:not(#tech)").css({"color":"white"});
				return true;
			break;

		default:
			console.log("Clicked on something else :(");
			break;
		}
		

	});

	$('a').hover(function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"#ED1C25"});
	}, function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"white"});
	});


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
					$("#references").text(obj.Reference);
					// $(".blankSpace").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
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