var lowesCpn = angular.module('lowesCpn');
	
	lowesCpn.controller('loginCtrl', function($scope, $location, $firebaseAuth){
		var firebaseObj = new Firebase('https://lowes-coupon.firebaseio.com/');
		var loginObj = $firebaseAuth(firebaseObj);
		$scope.SignIn = function(user) {
			var username = $scope.user.email;
			var password = $scope.user.password;
			loginObj.$authWithPassword({
           		 email: username,
				 password: password
        }).then(function(user) {
            //Failure callback
			console.log('Authentication successful', user);
			$location.path('/admin');
		}, function(user){
			 console.log('Authentication failure');
			alert('wrong password or username. Please try again');
		})
		}
	});
	
	
	
	
	