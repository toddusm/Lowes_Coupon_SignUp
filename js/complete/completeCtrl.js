var lowesCpn = angular.module('lowesCpn');

lowesCpn.controller('completeCtrl', function($scope, $location){
	$scope.getReport = function(){
		console.log("move to report");
		$location.path("/mktReport");
	}
})