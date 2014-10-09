
$(document).ready(function(){

	$("#popupDiv").slideUp(10);

	var offsetvar = 1; 
	var entities =["arnstein", "davidoff", "krumholz", "alinsky", "linn", "halprin", "curry","arch", "arc", "and", "acd", "sanoff", "hester", "francis", "hamdi", "hou","prpcdn", "lynch", "hart", "moore", "chawla", "driskell","miginc", "crtc", "la21", "unicef", "symposium","freie", "chambers","sussex","unrisd","worldbank","undp","donors","icae", "pria" ,"sewa","grameen","fals-borda","opp-rti", "whyte", "minkler", "wallerstein","cbpr", "drsconference","njmf","demos","utopia","due", "xerox","florence","atproject", "cpsr","pdc", "psp", "ehn", "atelier" , "sanders"];
	var peopleInfo;
	var jsonDataObj;

	jQuery.getJSON("materials/entities_info_nospace.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		var firstname = data.items[0].Practitioner;
		console.log("First name is: "+firstname);
	});
	console.log("Later...got file data");


	$('li').mouseover(function(){
		$(this).addClass("hovered");
	});

	$('li').click(function(){
		var classname = $(this).attr('class');

			var id = $(this).attr('id');
			setDetailsDiv(id, entities);

	});


	$('a').click(function(e){
		var id = $(this).attr('id');
		// console.log("ID is "+id);

		switch(id){
			case 'alphabetical':
				console.log("Clicked alpha!");
				$(".category").css({"visibility":"gone"});
				$(".alphabetical").css({"visibility":"visible"});
				break;
			case 'category':
				console.log("Clicked category!");
				$(".alphabetical").css({"visibility":"gone"});
				$(".category").css({"visibility":"visible"});
				break;
			default:
				console.log("wrong clicked item!");
				break;
		}
	});

	$('#close').click(function(){
		console.log("clicked close");
		$('#popupDiv').slideUp(2000);
	})

	function setDetailsDiv(id, array){
		array.forEach(function(val, index, name){
				if(id == val){
					console.log("Setting "+val+" "+id+" at index "+index);
					// var obj = parsed.items[index];
					var obj = jsonDataObj[index];
					$("#name").text(obj.Practitioner);
					$("#years").text(obj.Decade);
					$("#fields").text(obj.Field);
					$("#quotes").text(obj.Quotes);
					$("#aboutPerson").text(obj.About);
					$("#connections").text(obj.Connections);
					$("#publications").text(obj.Publications);
					if(obj.Country.search("USA")>-1){
						console.log("Country is usa!"+obj.Country);
						$("#globe img").attr('src', 'materials/Map_US.png');
					} else {
						console.log("Not USA :(");
							// $("#globe img").css({"display":"none"});
							$("#globe img").attr('src', "");
						// var mapImg = document.getElementById('globe');
						// mapImg.parentNode.removeChild(mapImg);
					}
					animateDiv();
				}
			});
	}

	function animateDiv(){
		// e.preventDefault();
		// console.log($("#popupDiv").css("visibility"));

		if($('#popupDiv').is(":visible")){
			console.log("div visible");
			// $('#popupDiv').slideUp(2000);
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}

});