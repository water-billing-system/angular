'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('MenuCtrl', function($scope, $http, userFactory, $location, $rootScope, $cookieStore) {
		$scope.user = userFactory;

		$scope.logout = function() {
			$http.get('http://10.0.0.20:9000/app/logout')
				.success(function(data) {
					if (data.hasOwnProperty('success')) {
						userFactory.email = '';
						$rootScope.unauthorized = true;
						ClearCredentials();
						$location.path('/login');
					}
				});
		};

		$scope.$watch('user.full_name', function(newVal) {
			if ($cookieStore.get('currentUser') === '') {
				$scope.isLoggedIn = false;
			} else {
				$scope.full_name = newVal;
				$scope.isLoggedIn = true;
			}
		});

		function ClearCredentials() {
			$rootScope.currentUser = {};
			$cookieStore.remove('currentUser');
		}


	});