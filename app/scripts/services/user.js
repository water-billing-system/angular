'use strict';

/**
 * @ngdoc service
 * @name playAngularApp.user
 * @description
 * # user
 * Factory in the playAngularApp.
 */
angular.module('playAngularApp')
  .factory('userFactory', function() {
    var email = "";
    var full_name = "";
    // Service logic
    // ...


    // Public API here
    return {
      email: email,
      full_name: full_name
    };

  });
