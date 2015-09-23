var lowesCpn = angular.module('lowesCpn');

lowesCpn.controller('adminCtrl', function($scope, $firebaseAuth, authRef, $location, adminService, $firebaseArray, listRef){
	$scope.authObj = $firebaseAuth(authRef);
	
	$scope.userList = listRef;
	console.log('listRef', listRef);
	
	$scope.delete = function(user){
		var answer = confirm("Delete User")
		if(answer) {
		$scope.userList.$remove(user)
		} else {} 
	}  
	
	});
	
	// $scope.getList = function(){
	// 	adminService.getList().then(function(userList){
	// 		console.log(222, userList);
	// 		$scope.userList = userList;
	// 	})
	// }
	
	// adminService.getList().then(function(userList){
	// 		console.log(222, userList);
	// 		$scope.userList = userList;
	// })
		

