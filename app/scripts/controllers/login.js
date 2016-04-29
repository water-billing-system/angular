'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('LoginCtrl', function($scope, userFactory, $location, $http, $rootScope, $cookieStore) {

		$scope.isAuthenticated = function() {
			if (userFactory.email) {
				console.log(userFactory.email);
				$location.path('/');
			} else {
				$http.get('http://localhost:9000/app/isauthenticated')
					.error(function() {
						$location.path('/login');
					})
					.success(function(data) {
						if (data.hasOwnProperty('success')) {
							userFactory.email = data.success.user;
							$location.path('/');
						}
					});
			}
		};

		$scope.isAuthenticated();

		$scope.login = function() {

			var payload = {
				email: this.email,
				password: this.password
			};

			$http.post('http://localhost:9000/app/login', payload)
				.error(function(data, status) {
					console.log("Login Error must be handled.");
				})
				.success(function(data) {
					console.log(data);
					if (data.hasOwnProperty('success')) {
						userFactory.email = data.success.user;
						$cookieStore.put('auth',1);
						$rootScope.unauthorized = false;
						SetCredentials(payload.email)
						$location.path('/');
					}
				});
		};

		function SetCredentials(email) {

			$rootScope.currentUser = {
				email: email
			};

			$cookieStore.put('currentUser', $rootScope.currentUser);
		}

	});