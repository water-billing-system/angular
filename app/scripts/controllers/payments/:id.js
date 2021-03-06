'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:PaymentsIdCtrl
 * @description
 * # PaymentsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('PaymentsIdCtrl', function($scope, $routeParams, $http, ngNotify) {
		$scope.params = $routeParams;
		console.log($scope.params);
		$scope.customerId = $scope.params.customerId;
		$scope.order = $scope.params.order;

		$http.get('http://192.168.1.46:9000/api/customers/' + $scope.customerId +
				'/payments/' + $scope.order)
			.error(function(data, status) {
				ngNotify.set("Customer is not found", 'error');
			})
			.success(function(data) {
				$scope.datas = data;
				console.log(data);
			});


	});
