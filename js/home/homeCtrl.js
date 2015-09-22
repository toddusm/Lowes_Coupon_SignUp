var lowesCpn = angular.module('lowesCpn');

lowesCpn.controller('homeCtrl', function($scope, $firebaseArray, $location, userRef){
	$scope.user = $firebaseArray(userRef);
	$scope.getSubmit = function(user){
		console.log(user);
		$scope.user.$add({
			name: user.name,
			email: user.email,
			address: user.address,
			num: user.num,
			checked: false,
			date: Firebase.ServerValue.TIMESTAMP
		})
		$location.path('/complete')
	}
		
	$scope.getLogin = function(){
		console.log('working')
		$location.path('/login');
	}
	
});




