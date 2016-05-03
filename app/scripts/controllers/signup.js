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

		$scope.signup = function() {
			var payload = {
				email: $scope.email,
				password: $scope.password,
				full_name: $scope.full_name
			};

			$http.post('http://10.0.0.20:9000/app/signup', payload)
				.success(function(data) {
					console.log(data);
					if (data.hasOwnProperty('success')) {
						userFactory.email = $scope.email;
						$location.path('/');
					}
				});
		};
	});