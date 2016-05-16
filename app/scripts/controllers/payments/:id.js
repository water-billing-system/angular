'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:PaymentsIdCtrl
 * @description
 * # PaymentsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('PaymentsIdCtrl', function($scope,$routeParams,$http) {
		$scope.params = $routeParams;
		console.log($scope.params);
		$scope.customerId = $scope.params.customerId;

		$http.get('http://192.168.1.46:9000/app/customers/'+$scope.customerId+'/payments?order=' + $scope.order)
			.success(function(data) {
				$scope.datas = data;
				console.log(data);
			});
	});