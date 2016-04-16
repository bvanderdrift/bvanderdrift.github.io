redirect = function(){ 
	analytics.track("Redirected to toko", function(){
		window.location = "http://bit.ly/tokomooi";
	}); 
};

//Music won't play on mobile phones, so normal redirect.
if(Meteor.Device.isPhone() || Meteor.Device.isTablet()) {
  setTimeout(redirect, 5000);
}

analytics.ready(function(){
	analytics.track("Visit by " + Meteor.Device._type);
});