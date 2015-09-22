var lowesCpn = angular.module('lowesCpn', ['ngRoute', 'firebase']);

lowesCpn.constant('fb', {
	url: 'https://lowes-coupon.firebaseio.com/'
})

lowesCpn.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl:'js/home/homeTmpl.html',
			controller:'homeCtrl',
			resolve: {
				userRef: function(homeService){
					return homeService.getUser();
				}
			}
		})
		.when('/complete', {
			templateUrl: 'js/complete/completeTmpl.html',
			controller: 'completeCtrl'
		})
		.when('/mktReport', {
			templateUrl: 'js/MktReport/mktReportTmpl.html'
		})
		.when('/login', {
			templateUrl: 'js/admin/loginTmpl.html',
			controller: 'loginCtrl'
			})
		.when('/admin', {
			templateUrl: 'js/admin/adminTmpl.html',
			controller:  'adminCtrl',
			resolve: {
				authRef: function(adminService){
					return adminService.getAuth();
				},
				listRef: function(adminService){
					return adminService.getList();
				}
			}
		})
		
		.otherwise (
			'/home'
		)
})