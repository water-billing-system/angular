'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('CustomersCtrl', function($location,$scope) {

		$scope.searchCustomer = function() {
			 $location.path('/customers/'+$scope.search);
		};

	});