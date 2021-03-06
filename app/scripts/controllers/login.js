'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('LoginCtrl', function($scope, userFactory, $location, $http,
		$rootScope, $cookieStore, ngNotify) {

		$scope.isAuthenticated = function() {
			if (userFactory.email) {
				console.log(userFactory.email);
				$location.path('/');
			} else {
				$http.get('http://192.168.1.46:9000/api/isauthenticated')
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

			$http.post('http://192.168.1.46:9000/api/login', payload)
				.error(function(data, status) {
					ngNotify.set("Username or Password is wrong", 'error');
				})
				.success(function(data) {
					console.log(data);
					if (data.hasOwnProperty('success')) {
						userFactory.email = data.success.user;
						$rootScope.user_name = data.success.full_name;
						$cookieStore.put('auth', 1);
						$rootScope.unauthorized = false;
						if (data.success.admin == true) {
							$rootScope.admin = true;
						}
						SetCredentials(payload.email, data.success.full_name, data.success.id,
							data.success.admin);
						$location.path('/');
						ngNotify.set("Welcome", 'success');
					}
				});
		};

		function SetCredentials(email, full_name, id, admin) {

			console.log(full_name);

			$cookieStore.put('email', email);
			$cookieStore.put('full_name', full_name);
			$cookieStore.put('id', id);
			$cookieStore.put('admin', admin);

		}

	});
