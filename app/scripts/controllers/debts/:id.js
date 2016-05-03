'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:DebtsIdCtrl
 * @description
 * # DebtsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('DebtsIdCtrl', function ($scope,$routeParams,$http) {
		$scope.params = $routeParams;
		console.log($scope.params);
		$scope.customerId = $scope.params.id;

		$http.get('http://10.0.0.20:9000/app/customers/'+$scope.customerId+'/debts?order=' + $scope.order)
			.success(function(data) {
				$scope.datas = data;	
				console.log(data);
			});
  });
