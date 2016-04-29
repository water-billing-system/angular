'use strict';

describe('Controller: PaymentsIdCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var PaymentsIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaymentsIdCtrl = $controller('PaymentsIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaymentsIdCtrl.awesomeThings.length).toBe(3);
  });
});
