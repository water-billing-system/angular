'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:PaymentsDetailsIdCtrl
 * @description
 * # PaymentsDetailsIdCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('PaymentsDetailsIdCtrl', function($scope, $routeParams, $http) {
    $scope.params = $routeParams;
    console.log($scope.params);
    $scope.id = $scope.params.id;

    $http.get('http://192.168.1.46:9000/app/payments/' + $scope.id)
      .success(function(data) {
        $scope.datas = data;
        console.log(data);
      });
  });
