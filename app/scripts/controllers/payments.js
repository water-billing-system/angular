'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:PaymentsCtrl
 * @description
 * # PaymentsCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
	.controller('PaymentsCtrl', function($scope, $location) {

		$scope.searchCustomerPayment = function() {
			$location.url('/payments/' + $scope.search + '/' + $scope.order);
		};

	});
