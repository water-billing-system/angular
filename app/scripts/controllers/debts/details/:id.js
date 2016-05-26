'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:DebtsDetailsIdCtrl
 * @description
 * # DebtsDetailsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('DebtsDetailsIdCtrl', function($scope, $routeParams, $http) {
    $scope.params = $routeParams;
    console.log($scope.params);
    $scope.customerId = $scope.params.id;

    $http.get('http://192.168.1.46:9000/api/debts/' + $scope.customerId)
      .success(function(data) {
        $scope.datas = data;
        console.log(data);
      });
  });
