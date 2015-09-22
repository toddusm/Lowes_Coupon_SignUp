var lowesCpn = angular.module('lowesCpn');
	
	// lowesCpn.controller('loginCtrl', function($scope, $location, $firebaseAuth){
	// 	$scope.user = {};
	// 	$scope.authRef.$authWithPassword({
  	// 	 email: "user.email",
 	// 	 password: "user.password"
	// 	}).then(function(authData) {
  	// 	console.log("Logged in as:", authData.uid);
	// 	}).catch(function(error) {
  	// 	console.error("Authentication failed:", error);
	// 	});
	
		
	// });
	
	
	lowesCpn.controller('loginCtrl', function($scope, $location, $firebaseAuth){
		var firebaseObj = new Firebase('https://lowes-coupon.firebaseio.com/');
		var loginObj = $firebaseAuth(firebaseObj);
		$scope.SignIn = function(user) {
			var username = $scope.user.email;
			var password = $scope.user.password;
			loginObj.$authWithPassword({
           		 email: username,
				 password: password
        }, function(error, authData) {
            //Failure callback
			if(error){
            console.log('Authentication failure');
			alert('wrong password or username. Please try again');
		} else {
			console.log('Authentication successful', authData);
			$location.path('/admin');
		}
		})
		
		
		}
	});