var lowesCpn = angular.module('lowesCpn');

lowesCpn.service('homeService', function(fb){
	this.getUser = function(){
		return new Firebase(fb.url + '/home');
	}
	
});