'use strict';

describe('Controller: PaymentsDetailsIdCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var PaymentsDetailsIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaymentsDetailsIdCtrl = $controller('PaymentsDetailsIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaymentsDetailsIdCtrl.awesomeThings.length).toBe(3);
  });
});
