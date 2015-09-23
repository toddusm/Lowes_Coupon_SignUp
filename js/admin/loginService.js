var lowesCpn = angular.module('lowesCpn');

lowesCpn.service('loginService', function($location, $firebaseAuth){
		var firebaseObj = new Firebase('https://lowes-coupon.firebaseio.com/');
		var loginObj = $firebaseAuth(firebaseObj);
		this.signIn = function(admin) {
			var username = admin.email;
			var password = admin.password;
			loginObj.$authWithPassword({
           		 email: username,
				 password: password
        }).then(function(user){
			console.log('Authentication successful', user);
			$location.path('/admin');
		}, function(user){
			console.log('Authentication failure');
			alert('wrong password or username. Please try again');
		})
		}
	});
