'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:DebtsIdCtrl
 * @description
 * # DebtsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('DebtsIdCtrl', function($scope, $routeParams, $http, ngNotify) {
    $scope.params = $routeParams;
    console.log($scope.params);
    $scope.customerId = $scope.params.id;
    $scope.order = $scope.params.order;

    $http.get('http://192.168.1.46:9000/api/customers/' + $scope.customerId +
        '/debts/' + $scope.order)
      .error(function(data, status) {
        ngNotify.set("Customer is not found", 'error');
      })
      .success(function(data) {
        $scope.datas = data;
        $scope.bills = data.bills;
        console.log(data);
      });



  });
