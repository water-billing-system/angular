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
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/customers', {
    templateUrl: 'views/customers.html',
    controller: 'CustomersCtrl',
    controllerAs: 'customers'
  })
  .when('/payments', {
    templateUrl: 'views/payments.html',
    controller: 'PaymentsCtrl',
    controllerAs: 'payments'
  })
  .when('/debts', {
    templateUrl: 'views/debts.html',
    controller: 'DebtsCtrl',
    controllerAs: 'debts'
  })
  .when('/statistics', {
    templateUrl: 'views/statistics.html',
    controller: 'StatisticsCtrl',
    controllerAs: 'statistics'
  })
  .when('/customers/:id/edit', {
    templateUrl: 'views/customers/edit.html',
    controller: 'CustomersIdCtrl',
    controllerAs: 'customers/edit'
  })
  .otherwise({
    redirectTo: '/'
  });
});
