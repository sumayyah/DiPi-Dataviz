
$(document).ready(function(){

	$("#popupDiv").slideUp(10);

	var width = $(window).width()+"px";
	$('#popupDiv').css({'width':width});
	$('nav').css({'width':width});
	$("#content").css({'width':width});
	$('footer').css({'width':width});

	// $(window).resize(function(){
	// 	// To get make sure pages do fill the screen, but don't squash content - works when you start small(squashed)->big, resize ok; Big to small ok; Start small is an issue
	// 	var width = $(window).width()+"px";
	// 	$('#popupDiv').css({'width':width});
	// 	$('nav').css({'width':width});
	// 	$("#content").css({'width':width});
	// 	$('footer').css({'width':width});
	// 	// TODO: what if this is a really wide window? 
	// 	console.log("width is "+width);
	// });


	var offsetvar = 1; 
	var peopleInfo;
	var jsonDataObj;

	jQuery.getJSON("materials/entities_info2.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		
	});


	$('li').mouseover(function(){
		$(this).addClass("hovered");
	});

	$('li').click(function(){
		var classname = $(this).attr('class');

			var id = $(this).attr('id');
			setDetailsDiv(id);

	});


	$('a').click(function(e){
		var id = $(this).attr('id');
		// console.log("ID is "+id);

		switch(id){

			default:
				console.log("wrong clicked item!");
				break;
		}
	});

	$('a').hover(function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"#ED1C25"});
	}, function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"white"});
	})

	$('.column_sm a').hover(function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"#ED1C25"});
	}, function(){
		var id = $(this).attr('id');
		$("#"+id).css({"color":"#878989"});
	})

	$('#close').click(function(){
		$('#popupDiv').slideUp(2000);
	})

	function setDetailsDiv(id){

		for(var i=0;i<jsonDataObj.length;i++){
			var obj = jsonDataObj[i];
			
			if(id==obj.Tag){
				console.log("Matched "+id+" and "+obj.Tag);

					$("#name").text(obj.NameofEntities);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.QuotesaboutParticipation);
					$("#aboutPerson").text(obj.AboutEntity);
					$("#connections").text(obj.KeyConnections);
					$("#publications").text(obj.KeyPublications);
					setCountry(obj.Geography);
					animateDiv();
			}
		}

	}

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

	function animateDiv(){
	
		if($('#popupDiv').is(":visible")){
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}

});