'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:CustomersIdCtrl
 * @description
 * # CustomersIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('CustomersIdCtrl', function($http,$scope,$routeParams) {
		
		$scope.params = $routeParams;
		console.log($scope.params);
		$scope.customerId = $scope.params.customerId;

		$http.get('http://192.168.1.46:9000/app/customers/'+ $scope.customerId )
			.success(function(data) {
				$scope.customer = data;
				console.log(data);
			});
	});