
$(document).ready(function(){

	$("#popupDiv").slideUp(10);

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
					if(obj.Geography.search("USA")>-1){
						$("#globe img").attr('src', 'materials/Map_US.png');
					} else {
						$("#globe img").attr('src', "");
						
					}
					animateDiv();
			}
		}


		// array.forEach(function(val, index, name){
		// 		if(id == val){
		// 			console.log("Setting "+val+" "+id+" at index "+index);
		// 			// var obj = parsed.items[index];
		// 			var obj = jsonDataObj[index];
		// 			$("#name").text(obj.Name);
		// 			$("#years").text(obj.Decade);
		// 			$("#fields").text(obj.Field);
		// 			$("#quotes").text(obj.Quotes);
		// 			$("#aboutPerson").text(obj.About);
		// 			$("#connections").text(obj.Connections);
		// 			$("#publications").text(obj.Publications);

		// 			if(obj.Geography.search("USA")>-1){
		// 				$("#globe img").attr('src', 'materials/Map_US.png');
		// 			} else {

		// 					$("#globe img").attr('src', "");
		// 			}
		// 			animateDiv();
		// 		}
		// 	});
	}

	function animateDiv(){
	
		if($('#popupDiv').is(":visible")){
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}

});