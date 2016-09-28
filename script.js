function name(){
	console.log('x333');
}

//app.js
angular.module('app', ['http', 'adasda'])
	.run()
	.config();


//controller.js
angular.module('homeController', function(){

});

angular.module('app')
	.filter('customFilter', function(){
		return function(elem){
			alert(elem);
			return elem.toUppercase();
		}
	})
