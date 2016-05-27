'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('SignupCtrl', function($scope, $http, $location, userFactory) {

		$scope.adminOptions = [{
			"name": "No",
			"value": 0
		}, {
			"name": "Yes",
			"value": 1
		}];

		$scope.admin = $scope.adminOptions[0];

		$scope.signup = function() {
			var payload = {
				email: $scope.email,
				password: $scope.password,
				full_name: $scope.full_name,
				admin: $scope.admin.name
			};

			$http.post('http://192.168.1.46:9000/api/signup', payload)
				.success(function(data) {
					console.log(data);
					if (data.hasOwnProperty('success')) {
						userFactory.email = $scope.email;
						$location.path('/');
					}
				});
		};
	});
