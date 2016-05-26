'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:DebtsCtrl
 * @description
 * # DebtsCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('DebtsCtrl', function($scope, $location, $http) {

    $scope.searchCustomerDebts = function() {
      $location.url('/debts/' + $scope.search + '/' + $scope.order);
    };

    $scope.pay = function(index, debt_id) {
      $http.post('http://192.168.1.46:9000/api/bills/' + debt_id +
          '/update')
        .success(function(data) {
          $scope.datas = data;
          $scope.bills.splice(index, 1);
          console.log($scope.debt_order);
          console.log(data);
        });
    };


  });
