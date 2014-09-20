

chrome.extension.onRequest.addListener( function(request, sender, sendResponse) {

	if (request.action == "available"){
		chrome.tts.speak('IPhone 6 is now avaiable', {'rate':1});
	}
	
	if (request.action == "stop"){
		chrome.tts.speak('automatic check availability program stopped', {'rate':1});
	}
	
	if (request.action == "start"){
		chrome.tts.speak('automatic check availability program started', {'rate':1});
	}
}
)
	
	