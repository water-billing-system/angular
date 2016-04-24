'use strict';

describe('Controller: PaymentsCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var PaymentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaymentsCtrl = $controller('PaymentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaymentsCtrl.awesomeThings.length).toBe(3);
  });
});
