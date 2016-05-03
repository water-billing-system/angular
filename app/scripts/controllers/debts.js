'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:DebtsCtrl
 * @description
 * # DebtsCtrl
 * Controller of the playAngularApp
 */
 angular.module('playAngularApp')
 .controller('DebtsCtrl', function ($scope,$location) {
 	
 	$scope.searchCustomerDebts = function() {
 		$location.url('/debts/' + $scope.search + '?order='+$scope.order);
 	};

 });
