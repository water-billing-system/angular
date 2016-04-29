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
			$http.get('http://localhost:9000/app/logout')
				.success(function(data) {
					if (data.hasOwnProperty('success')) {
						userFactory.email = '';
						$rootScope.unauthorized = true;
						ClearCredentials();
						$location.path('/login');
					}
				});
		};

		$scope.$watch('user.email', function(newVal) {
			if ($cookieStore.get('currentUser') === '') {
				$scope.isLoggedIn = false;
			} else {
				$scope.email = newVal;
				$scope.isLoggedIn = true;
			}
		});

		function ClearCredentials() {
			$rootScope.currentUser = {};
			$cookieStore.remove('currentUser');
		}


	});