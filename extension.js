var refresh_time_interval ;




function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

window.onload = function(){

	
	
	var start_btn  = document.getElementById("start_btn");
	var stop_btn  = document.getElementById("stop_btn");
	
	
	
	start_btn.addEventListener("click", function(){
		var form_time_interval = document.getElementById("refresh_interval").value;
		if( isNumber(form_time_interval)){
			refresh_time_interval =  form_time_interval;
		}
		
		chrome.tabs.getSelected(null, function(tab) {

			chrome.tabs.sendRequest(tab.id, {action: "start", refresh_time_interval: refresh_time_interval}, function(response){
			});
		});
	}, false);

	stop_btn.addEventListener("click", function(){
		localStorage['found']=  "TRUE";
		chrome.extension.sendRequest({action: "stop"});
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.sendRequest(tab.id, {action: "stop"}, function(response){
			});
		});
	}, false);
	
	
}







