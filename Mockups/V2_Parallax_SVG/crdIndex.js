
$(document).ready(function(){

	$("#popupDiv").slideUp(10);

	var offsetvar = 1; 
	var entities =["arnstein", "davidoff", "krumholz", "alinsky", "linn", "halprin", "curry","arch", "arc", "and", "acd", "sanoff", "hester", "francis", "hamdi", "hou","prcdn", "lynch", "hart", "moore", "chawla", "driskell","miginc", "crtc", "la21", "unicef", "symposium","freie", "chambers","sussex","unrisd","worldbank","undp","donors","icae", "spra" ,"sewa","grameen","fals-borda","opp-rti", "whyte", "minkler", "wallerstein","cbpr", "drsconference","njmf","demos","utopia","due", "xparc","florence","atproject", "cpsr","pdc", "psp", "ehn", "atelier" , "sanders"];
	var peopleInfo;
	var jsonDataObj;

	jQuery.getJSON("materials/entities_info_nospace.json", function(data){
		console.log("Got file data!");
		jsonDataObj = data.items;
		var firstname = data.items[0].Practitioner;
		console.log("First name is: "+firstname);
	});


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

			default:
				console.log("wrong clicked item!");
				break;
		}
	});

	$('#close').click(function(){
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
						$("#globe img").attr('src', 'materials/Map_US.png');
					} else {

							$("#globe img").attr('src', "");
					}
					animateDiv();
				}
			});
	}

	function animateDiv(){
	
		if($('#popupDiv').is(":visible")){
		} else { 
			console.log("div gone");
			$('#popupDiv').slideDown(2000);
		}
	}

});