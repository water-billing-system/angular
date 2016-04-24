'use strict';

describe('Controller: CustomersIdCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var CustomersIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomersIdCtrl = $controller('CustomersIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomersIdCtrl.awesomeThings.length).toBe(3);
  });
});
