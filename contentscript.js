
var found;
var refresh_time_interval;



function iphone6AvailabilityCheck(){

	if( document.body.innerHTML.indexOf("true") > -1){
		localStorage['found'] = "TRUE";
		alert("IPhone 6 is now avaiable");
		chrome.extension.sendRequest({action: "available"});
	}else{
		setTimeout(function(){location.reload();} , refresh_time_interval);
	}
}



if (localStorage.getItem("found") != null){
	found = localStorage['found'];
		
	if (found == "FALSE"){
		iphone6AvailabilityCheck();
	}
}

chrome.extension.onRequest.addListener(function(request, sender, callback)
{
	

    switch(request.action)
    {
        case "start":
			
			refresh_time_interval = request.refresh_time_interval;
			
			localStorage['found']=  "FALSE";
			localStorage['refresh_time_interval'] = refresh_time_interval;

			chrome.extension.sendRequest({action: "start"});
			iphone6AvailabilityCheck();
			
			
			break;
			
		case "stop":
		
			chrome.extension.sendRequest({action: "stop"});
			localStorage['found']=  "TRUE";
			break;
		
			
    }
});


