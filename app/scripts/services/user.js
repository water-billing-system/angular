'use strict';

/**
 * @ngdoc service
 * @name playAngularApp.user
 * @description
 * # user
 * Factory in the playAngularApp.
 */
angular.module('playAngularApp')
  .factory('userFactory', function () {
  	var email = "";
    // Service logic
    // ...


    // Public API here
    return {
        email:email
    };

  });
