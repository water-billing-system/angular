'use strict';

/**
 * @ngdoc overview
 * @name playAngularApp
 * @description
 * # playAngularApp
 *
 * Main module of the application.
 */
angular
  .module('playAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngNotify'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'customers',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/payments', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsCtrl',
        controllerAs: 'payments',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/debts', {
        templateUrl: 'views/debts.html',
        controller: 'DebtsCtrl',
        controllerAs: 'debts',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup',
        resolve: {
          auth: function($rootScope, $location) {
            if ($rootScope.unauthorized) {
              $location.path('/login');
            }
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/customers/:customerId', {
        templateUrl: 'views/customers/:id.html',
        controller: 'CustomersIdCtrl',
        controllerAs: 'customers/:id'
      })
      .when('/payments/:customerId/:order', {
        templateUrl: 'views/payments/:id.html',
        controller: 'PaymentsIdCtrl',
        controllerAs: 'payments/:id'
      })
      .when('/debts/:id/:order', {
        templateUrl: 'views/debts/:id.html'
      })
      .when('/payments/details/:id', {
        templateUrl: 'views/payments/details/:id.html',
        controller: 'PaymentsDetailsIdCtrl',
        controllerAs: 'payments/details/:id'
      })
      .when('/debts/details/:id', {
        templateUrl: 'views/debts/details/:id.html',
        controller: 'DebtsDetailsIdCtrl',
        controllerAs: 'debts/details/:id'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }).run(function($rootScope, $location, $cookieStore, userFactory) {

    $rootScope.unauthorized = true;
    $rootScope.admin = false;
    $rootScope.user_name = $cookieStore.get('full_name');


    if (typeof $cookieStore.get('email') != "undefined") {
      userFactory.email = $cookieStore.get('email')
      $rootScope.unauthorized = false;

      if ($cookieStore.get('admin')) {
        $rootScope.admin = true;
      }

    }

    if ($rootScope.unauthorized) {
      $location.path('/login');
    }

  });
