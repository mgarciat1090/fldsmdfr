'use strict';
var fl = window.fl || {};

(function(){

		//main init bootstrap function 
		var boot = function(el,start){
			var _el = fl.core.ds(el);
			fl.core.init(start,_el);


		}

	boot('mainApp','Loading App');
	
})();


