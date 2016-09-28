var myapp = {};

myapp.commonmethod = {

}

{ name: "",
  age: "" }

  document.addEventListerner

  document = {}

  document.addEventListerner = {

  }

  MYAPP.event = {
    addListener: function(el, type, fn) {

		var s = "srinivas";
		if (error){
			return fn(err);
		}
    	return fn(null, s);
    },
    removeListener: function(el, type, fn) {
    // code stuff
    },
    getEvent: function(e) {
    // code stuff
    }
}

MYAPP.addListener(document.getElementById('demo'), "click", function(err, result){
	console.log('callback ', result);

	if(err){
		alert('error occurred');
	}

	console.log('success... event added to ', result);
});

$http.post('url', {}).then(function success(response){
	console.log('res', response);
}, function failure(err){
	console.log('err', err);
});


