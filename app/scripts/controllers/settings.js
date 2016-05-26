'use strict';

/**
 * @ngdoc function
 * @name playAngularApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the playAngularApp
 */
angular.module('playAngularApp')
  .controller('SettingsCtrl', function($scope, $cookieStore, $http) {

    $scope.email = $cookieStore.get('email');
    $scope.full_name = $cookieStore.get('full_name');

    $scope.settings = function() {
      var payload = {
        id: $cookieStore.get('id'),
        email: $scope.email,
        password: $scope.password,
        full_name: $scope.full_name
      };

      $http.post('http://192.168.1.46:9000/api/users/' + payload.id +
          '/update', payload)
        .success(function(data) {
          console.log(data);
        });
    };

  });
