var lowesCpn = angular.module('lowesCpn');
	
	lowesCpn.controller('loginCtrl', function($scope, $location, $firebaseAuth, loginService){
		
		$scope.SignIn = function(admin){
			loginService.signIn(admin);
		}
	});
	
	

	
