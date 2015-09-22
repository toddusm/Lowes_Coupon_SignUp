var lowesCpn = angular.module('lowesCpn');

lowesCpn.directive('navbar', function(){
	return {
		templateUrl: 'js/directive/navbarTmpl.html'
	}
});

lowesCpn.directive('returnHome', function(){
	return {
		template: '<div><a href="#/"><button class="glyphicon glyphicon-home" aria-hidden="true"></button></a></div>'
	};
})

lowesCpn.directive('customFooter', function(){
	return {
		templateUrl: 'js/directive/footerTmpl.html'
	}
});

