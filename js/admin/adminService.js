var lowesCpn = angular.module('lowesCpn');

lowesCpn.service('adminService', function(fb, $firebaseArray, $http){
	this.usersRef = new Firebase(fb.url + '/home');
	var usersRef = this.usersRef;
	this.getAuth = function(){
		return new Firebase(fb.url + '/login');
	}
	
	this.getList = function(){
		var users = $firebaseArray(usersRef);
		users.$loaded(function(response) {
			for(var i = 0; i < response.length; i++) {
				if(response[i].date) {
					response[i].date = new Date(response[i].date)
					console.log('Date', response[i].date);
				}	
			}
			return response;
		});
		return users;
	}
	
	
	
})



	// this.getList = function(){
	// 	return $http({
	// 		method: 'GET',
	// 		url: 'https://lowes-coupon.firebaseio.com/home.json'
	// 	}).then(function(users){
	// 		var userList = users.data;
	// 		console.log(1111, userList);
	// 		return userList;
	// 	})
	// }