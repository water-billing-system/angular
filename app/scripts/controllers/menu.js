'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('MenuCtrl', function($scope, $http, userFactory, $location,
		$rootScope, $cookieStore, ngNotify) {
		$scope.user = userFactory;

		$scope.logout = function() {
			$http.get('http://192.168.1.46:9000/api/logout')
				.success(function(data) {
					if (data.hasOwnProperty('success')) {
						userFactory.email = '';
						$rootScope.unauthorized = true;
						$rootScope.admin = false;
						$rootScope.user_name = "";
						ClearCredentials();
						$location.path('/login');
						ngNotify.set("See you later", 'info');
					}
				});
		};

		$scope.$watch('user.full_name', function(newVal) {
			if ($cookieStore.get('email') === '') {
				$scope.isLoggedIn = false;
			} else {
				$scope.full_name = newVal;
				$scope.isLoggedIn = true;
			}
		});

		function ClearCredentials() {
			$rootScope.currentUser = {};
			$cookieStore.remove('email');
			$cookieStore.remove('auth');
			$cookieStore.remove('full_name');
			$cookieStore.remove('admin');
		}


	});
