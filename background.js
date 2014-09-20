

chrome.extension.onRequest.addListener( function(request, sender, sendResponse) {

	if (request.action == "available"){
		chrome.tts.speak('IPhone 6 is now avaiable', {'rate':1});
	}
	
	if (request.action == "stop"){
		chrome.tts.speak('automatic check availability program stopped', {'rate':1});
	}
	
	if (request.action == "start"){
		chrome.notifications.create(
			  'id1',{   
				  type: 'basic', 
				  iconUrl: "http://cdn.macrumors.com/article-new/2014/09/iphone_6_iphone_6_plus1.png", 
				  title: 'Iphone 6 Availiability', 
				  message: 'Some models are now available',
					//buttons: [{ title: ‘Call’, 
					//iconUrl: ‘call.png’},
					//		{ title: ‘Send Email’, 
					//		  iconUrl: ‘email.png’}],
				  priority: 0},
			  function() { /* Error checking goes here */} 

			); 
		chrome.tts.speak('automatic check availability program started', {'rate':1});
	}
}
)
	
	