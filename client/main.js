redirect = function(){ 
	analytics.track("Redirected to toko", function(){
		window.location = "http://bit.ly/tokomooi";
	}); 
};

//Music won't play on mobile phones, so normal redirect.
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  setTimeout(redirect, 5000);
}